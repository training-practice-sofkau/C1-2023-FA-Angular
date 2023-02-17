import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {

  constructor (private service: StudentService){}

  l_students: Student[] = [];
  total: number = 0;
  p: number = 1;
  count: number = 3;

  ngOnInit(){
    this.service.getAll().subscribe({
      next: (student) => {
        this.l_students = student,
        this.total = this.l_students.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  };



}
