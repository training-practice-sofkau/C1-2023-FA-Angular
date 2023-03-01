import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent {
  page: number = 1;
  total: number = 0;
  courses: Course[] = [];
  searchParameter: string = '';

  constructor(private service: CourseService) {}

  ngOnInit(): void {
    this.service.getAllCourses().subscribe({
      next: (course) => {
        (this.courses = course), (this.total = this.courses.length);
      },
      error: console.log,
      complete: console.log,
    });
  }

  deleteCourse(): void {
    if (confirm('Do you want to delete the course?')) {
      this.service.deleteCourse(this.searchParameter).subscribe({
        error: console.log,
        complete: console.log,
      });
      this.total = this.courses.length;
      alert('The course was deleted');
    }
  }
}
