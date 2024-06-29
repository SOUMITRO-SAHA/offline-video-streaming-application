use crate::model::courses;
use crate::model::sections;
use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::Serialize;

#[derive(Queryable, Selectable)]
#[diesel(table_name = courses)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct Course {
    pub id: Option<i32>,
    pub title: String,
    pub is_completed: bool,
    pub is_active: bool,
    pub archive: bool,
    pub favorite: bool,
    pub start_date: NaiveDateTime,
    pub end_date: Option<NaiveDateTime>,
    pub description: Option<String>,
}

#[derive(Queryable, Insertable, Serialize)]
#[diesel(table_name = sections)]
pub struct Section {
    pub id: i32,
    pub course_id: i32,
    pub title: String,
    pub is_active: bool,
    pub is_completed: bool,
}
