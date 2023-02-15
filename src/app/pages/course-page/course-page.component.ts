import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent implements OnInit {

  constructor(private service: CourseService) {}

  courses: Course[] = [];

  totalResults: number = this.courses.length;

  ngOnInit(): void {
      this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe({
      next: (courses) => {
        this.courses =[...courses];
        this.totalResults = courses.length;

      },
      error: console.log,
      complete: console.log,
    });
  }
}
