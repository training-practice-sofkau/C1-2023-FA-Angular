import { Course } from "./course.model"

export interface Student {
    studentId: string,
    name: string,
    dni: string,
    age: number,
    email: string,
    numCourses: number,
    courseDTO?: Course;
}
