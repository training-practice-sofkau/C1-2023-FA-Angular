import { Student } from "./student.model";

export interface Course {
    courseId: string,
    name: string,
    coach: string,
    level: number,
    lastUpdated: Date,
    students: Student[]
}
