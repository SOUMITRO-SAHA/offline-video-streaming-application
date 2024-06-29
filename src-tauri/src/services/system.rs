use std::process::Command;
use sysinfo::System;

pub fn get_os_name() -> String {
    let mut sys = System::new_all();

    sys.refresh_all();

    let os_name = System::name().unwrap_or_else(|| "Unknown".to_string());

    os_name
}

pub fn is_internet_connected() -> bool {
    let output = Command::new("ping")
        .args(&["-n", "1", "8.8.8.8"]) // Ping Google DNS server once
        .output()
        .expect("Failed to execute ping command");

    // Check if the ping command succeeded (indicates internet connectivity)
    output.status.success()
}
