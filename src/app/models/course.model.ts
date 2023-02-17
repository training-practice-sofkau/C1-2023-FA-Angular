import { Student } from "./student.model";

export interface Course {
    id: number,
    name: string,
    coach: string,
    level: number,
    lastUpdated: Date,
    studentList: Student[]
}
