import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
})
export class StudentPageComponent implements OnInit {
  constructor(private service: CourseService) {}

  students: Student[] = [];

  total: number = this.students.length;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe({
      next: (students) => (this.students = students),
      error: console.log,
      complete: console.log,
    });
  }
}
