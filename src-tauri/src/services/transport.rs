use std::fs;
use std::io;
use std::path::Path;

fn move_files_to_default_storage(source_folder: &str) -> Result<(), io::Error> {
    let source_path = Path::new(source_folder);
    let destination_path = Path::new("./");

    // Ensure source folder exists and is a directory
    if !source_path.exists() || !source_path.is_dir() {
        return Err(io::Error::new(
            io::ErrorKind::NotFound,
            "Source folder does not exist or is not a directory",
        ));
    }

    // Create the destination directory if it does not exist
    if !destination_path.exists() {
        fs::create_dir_all(destination_path)?;
    }

    // Iterate through all entries in the source directory
    for entry in fs::read_dir(source_path)? {
        let entry = entry?;

        let file_type = entry.file_type()?;
        let entry_path = entry.path();
        let entry_name = entry.file_name();

        // Construct the destination path
        let destination_file_path = destination_path.join(&entry_name);

        if file_type.is_dir() {
            // If it's a directory, recursively move its contents
            move_files_to_default_storage(entry_path.to_str().unwrap())?;
        } else {
            // If it's a file, move it to the destination
            fs::rename(&entry_path, &destination_file_path)?;
        }
    }

    // Remove the source directory after moving all contents
    fs::remove_dir_all(source_path)?;

    Ok(())
}
