import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit{
  l_students: Student[] = [];
  total: number = this.l_students.length;
  p: number = 1
  
  constructor(
    private studentService: StudentService
  ){}

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: (data) => {
        this.l_students = data.data;
        this.total = this.l_students.length;
      },
      error: (err) => {console.error("Error on getting student data" + err);},
      complete: () => {}
    })
  }

}
