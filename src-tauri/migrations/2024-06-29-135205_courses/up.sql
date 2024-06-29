CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    is_completed BOOLEAN NOT NULL,
    is_active BOOLEAN NOT NULL,
    archive BOOLEAN NOT NULL,
    favorite BOOLEAN NOT NULL,
    start_date DATETIME NOT NULL,
    end_date DATETIME,
    description TEXT
);

CREATE TABLE sections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    is_active BOOLEAN NOT NULL,
    is_completed BOOLEAN NOT NULL,
    course_id INTEGER NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses (id)
);
