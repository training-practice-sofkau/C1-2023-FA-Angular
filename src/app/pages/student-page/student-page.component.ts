import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {
  l_students: Student[] = [{
    id: "1",
    name: "Mary Rojas",
    idNum: "1234567890",
    age: 25,
    mail: "mary.rojas@hotmail.com",
    numCourses: 0
  },
{
    id: "2",
    name: "Sarah Vargas",
    idNum: "0987654321",
    age: 55,
    mail: "sarah.vargas@hotmail.com",
    numCourses: 2
  },
  {
    id: "3",
    name: "Andrés Camilo",
    idNum: "0987654321",
    age: 55,
    mail: "sarah.vargas@hotmail.com",
    numCourses: 2
  },
  {
    id: "4",
    name: "Ricardo Milos",
    idNum: "0987654321",
    age: 55,
    mail: "sarah.vargas@hotmail.com",
    numCourses: 2
  },
  {
    id: "5",
    name: "Jorge Pastor",
    idNum: "0987654321",
    age: 55,
    mail: "sarah.vargas@hotmail.com",
    numCourses: 2
  },
  {
    id: "3",
    name: "Andrés Camilo",
    idNum: "0987654321",
    age: 55,
    mail: "sarah.vargas@hotmail.com",
    numCourses: 2
  },
  {
    id: "4",
    name: "Ricardo Milos",
    idNum: "0987654321",
    age: 55,
    mail: "sarah.vargas@hotmail.com",
    numCourses: 2
  },
  {
    id: "5",
    name: "Jorge Pastor",
    idNum: "0987654321",
    age: 55,
    mail: "sarah.vargas@hotmail.com",
    numCourses: 2
  }
];
  pageSlice: Student[] = this.l_students.slice(0, 6);

  total: number = this.l_students.length;

  updateStudentsSlice(students: Student[]){
    this.pageSlice = students;
  }
}
