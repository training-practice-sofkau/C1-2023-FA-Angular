import { Student } from "./student.model";

export interface Course {
    idDTO: string,
    nameDTO: string,
    coachDTO: string,
    levelDTO: number,
    lastUpdatedDTO: Date,
    studentListDTO: Student[]
}