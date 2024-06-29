use serde::{Deserialize, Serialize};
use std::{
    fs::{self, File},
    io::{Read, Write},
    error::Error,
    path::PathBuf,
};

// Default local JSON file location
pub const LOCAL_JSON_STORAGE: &str = "database/local.json";

#[derive(Debug, Serialize, Deserialize, Default)]
pub struct ApplicationSettings {
    pub default_storage: String,
}

impl ApplicationSettings {
    pub fn get_default_storage_path() -> Result<String, Box<dyn Error>> {
        // Path to your local.json file
        let json_path = LOCAL_JSON_STORAGE;

        // Open the file in read-only mode
        let mut file = File::open(json_path).unwrap();

        // Read the contents of the file into a string
        let mut json_content = String::new();
        file.read_to_string(&mut json_content)?;

        // Parse JSON into ApplicationSettings struct
        let config: ApplicationSettings = serde_json::from_str(&json_content)?;

        // Return the default_storage path
        Ok(config.default_storage)
    }
}

pub fn initialize_application() -> Result<ApplicationSettings, Box<dyn Error>> {
    let mut app_data = match std::fs::read_to_string(LOCAL_JSON_STORAGE) {
        Ok(contents) => serde_json::from_str::<ApplicationSettings>(&contents).unwrap_or_default(),
        Err(_) => ApplicationSettings {
            default_storage: String::new(),
        },
    };

    // If data exists, use it; otherwise, initialize with defaults
    if app_data.default_storage.is_empty() {
        // Get platform-specific default storage path
        let default_path = get_platform_specific_default_storage_path()?;
        app_data.default_storage = default_path.clone();

        // Update the JSON file with the new default path
        update_local_json_storage_key("default_storage", &default_path)?;
    }

    // Check if the default storage folder exists, create it if it doesn't
    let default_storage_path = PathBuf::from(&app_data.default_storage);
    if !default_storage_path.exists() {
        fs::create_dir_all(&default_storage_path)?;
    }

    Ok(app_data)
}

fn get_platform_specific_default_storage_path() -> Result<String, Box<dyn Error>> {
    // Define the platform-specific default storage path here
    // For example, this could be a directory in the user's home directory
    let default_path = match dirs::home_dir() {
        Some(mut path) => {
            path.push(".ocsa");
            path.to_string_lossy().into_owned()
        }
        None => return Err("Unable to determine home directory".into()),
    };

    Ok(default_path)
}

fn update_local_json_storage_key(key: &str, value: &str) -> Result<(), Box<dyn Error>> {
    // Read the existing JSON data
    let mut json_content = String::new();
    {
        let mut file = File::open(LOCAL_JSON_STORAGE)?;
        file.read_to_string(&mut json_content)?;
    }

    // Parse the JSON content into a serde_json::Value
    let mut json_data: serde_json::Value = serde_json::from_str(&json_content)?;

    // Modify the specific key with the new value
    if let Some(obj) = json_data.as_object_mut() {
        obj.insert(key.to_string(), serde_json::Value::String(value.to_string()));
    }

    // Write the updated JSON data back to the file
    let updated_json_content = serde_json::to_string_pretty(&json_data)?;
    let mut file = File::create(LOCAL_JSON_STORAGE)?;
    file.write_all(updated_json_content.as_bytes())?;

    Ok(())
}
