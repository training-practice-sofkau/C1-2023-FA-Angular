import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  constructor (
    private studentService: StudentService
  ) {}

  students: Student[] = [];
  pageSlice: Student[] = [];

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: (students) => {
        this.students = students;
        this.pageSlice = this.students.slice(0,6);
      },
      error: (console.log),
      complete: (console.log)
    })

  }

  updateStudentsSlice(students: Student[]){
    this.pageSlice = students;
  }
}
