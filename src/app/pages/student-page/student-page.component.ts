import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['../../components/course-list/course-list.component.scss'],
})
export class StudentPageComponent implements OnInit {
  constructor(private service: StudentService) {}

  students: Student[] = [];
  totalResults: number = this.students.length;
  totalPages: number = 1;
  currentPage: number = 1;

  ngOnInit(): void {
    this.getAll();
  }

  calculatePages() {
    this.totalPages =
      this.totalResults % 3 > 0
        ? (this.totalResults - (this.totalResults % 3)) / 3 + 1
        : this.totalResults / 3;
  }
  passPage(index: number) {
    this.currentPage = index;
  }

  getAll() {
    this.service.getAll().subscribe({
      next: (students) => {
        this.students = [...students];
        this.totalResults = students.length;
        this.calculatePages();
      },
      error: console.log,
      complete: console.log,
    });
  }
}
