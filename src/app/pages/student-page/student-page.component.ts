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
