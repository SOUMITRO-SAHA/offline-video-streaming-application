mod services;

#[cfg(test)]
mod tests {
    use super::*;
    use services::app::initialize_application;
    use services::system::{get_os_name, is_internet_connected};

    #[test]
    fn test_init_application() {
        let res = initialize_application();
        println!("Init App Info: {:?}", res)
    }

    #[test]
    fn test_get_os_name() {
        let info = get_os_name().unwrap();
        println!("System Information: {:?}", info);

        assert!(!info.os_name.is_empty());
    }

    #[test]
    fn test_is_internet_connected() {
        assert!(is_internet_connected());
    }
}
