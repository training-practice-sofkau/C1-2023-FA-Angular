import { Course } from "./course.model";

export interface Student {
  studentId: string,
  name: string,
  idNum: string,
  age: number,
  mail: string,
  numCourses: number,
  courseListDTO: Course[]
}
