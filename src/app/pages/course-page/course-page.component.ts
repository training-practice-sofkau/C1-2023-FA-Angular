import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['../../components/course-list/course-list.component.scss'],
})
export class CoursePageComponent implements OnInit {
  constructor(private service: CourseService) {}

  courses: Course[] = [];
  totalResults: number = this.courses.length;
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
      next: (courses) => {
        this.courses = [...courses];
        this.totalResults = courses.length;
        this.calculatePages();
      },
      error: console.log,
      complete: console.log,
    });
  }
}
