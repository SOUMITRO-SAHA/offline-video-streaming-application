// use crate::connect::establish_connection;
// use crate::model::Course;
// use crate::schema::courses;
// use diesel::prelude::*;
// use diesel::result::Error;

// pub fn create_course(new_course: Course) -> Result<usize, Error> {
//     let connection = establish_connection()?;
//     diesel::insert_into(courses::table)
//         .values(&new_course)
//         .execute(&connection)
// }

// pub fn update_course_by_id(course_id: i32, updated_course: Course) -> Result<usize, Error> {
//     let connection = establish_connection()?;
//     diesel::update(courses::table.find(course_id))
//         .set(&updated_course)
//         .execute(&connection)
// }

// pub fn get_course_by_id(course_id: i32) -> Result<Course, Error> {
//     let connection = establish_connection()?;
//     courses::table.find(course_id).first(&connection)
// }

// pub fn get_all_courses() -> Result<Vec<Course>, Error> {
//     let connection = establish_connection()?;
//     courses::table.load::<Course>(&connection)
// }
