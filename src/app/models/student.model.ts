import {Course} from "./course.model";

export interface Student {
    id: string,
    name: string,
    idNum: string,
    age: number,
    mail: string,
    courseDTO: Course
}