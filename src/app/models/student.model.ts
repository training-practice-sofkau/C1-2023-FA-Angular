import { Course } from "./course.model";

export interface Student {
  studentId: string;
  name: string;
  idNumber: string;
  age: number;
  mail: string;
  course?: Course;
}
