// @generated automatically by Diesel CLI.

diesel::table! {
    courses (id) {
        id -> Nullable<Integer>,
        title -> Text,
        is_completed -> Bool,
        is_active -> Bool,
        archive -> Bool,
        favorite -> Bool,
        start_date -> Timestamp,
        end_date -> Nullable<Timestamp>,
        description -> Nullable<Text>,
    }
}

diesel::table! {
    sections (id) {
        id -> Nullable<Integer>,
        title -> Text,
        is_active -> Bool,
        is_completed -> Bool,
        course_id -> Integer,
    }
}

diesel::joinable!(sections -> courses (course_id));

diesel::allow_tables_to_appear_in_same_query!(courses, sections,);
