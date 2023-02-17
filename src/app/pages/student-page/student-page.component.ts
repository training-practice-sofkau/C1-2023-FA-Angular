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
  pageSlice: Student[] = this.students.slice(0, 6);
  total: number = 0;

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: (students) => {
        this.students = students;
        this.total = this.students.length

      },
      error: (console.log),
      complete: (console.log)
    })

  }

  updateStudentsSlice(students: Student[]){
    this.pageSlice = students;
    console.log
  }
}
