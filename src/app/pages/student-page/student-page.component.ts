import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  
  p: number = 0;
  results: number = 0;
  total: number = 0;
  l_students: Student[] = [];
  /*l_students: Student[] = [{
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
  }];*/
  
  constructor(private service: StudentService){}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (student) =>{
        console.log(student)
        this.l_students = student;
        console.log(this.l_students);
        this.results = this.l_students.length;
        this.total = this.results;
        console.log(this.total);
      },
      error: (console.log),
      complete:(console.log)
    });
  }
  
  
}
