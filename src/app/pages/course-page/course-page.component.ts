import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit{

  constructor(
    private courseService: CourseService
  ){}

  courses: Course[] = [];
  pageSlice: Course[] = [];

  ngOnInit(): void {
    this.courseService.getAll().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.pageSlice = this.courses.slice(0,6);
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  updateCoursesSlice(courses: Course[]){
    this.pageSlice = courses;
  }

  onDelete(course: Course){
    let courseIndex = this.pageSlice.indexOf(course, 0);
    if (courseIndex > -1) {
      this.pageSlice.splice(courseIndex, 1);
    }
  }
}
