import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
})
export class StudentPageComponent implements OnInit {
  constructor(private service: StudentService) {}

  students: Student[] = [];

  totalResults: number = 0;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe({
      next: (students) => {
         this.students = [...students];
         this.totalResults = students.length;

      },
      error: console.log,
      complete: console.log,
    });
  }
}
