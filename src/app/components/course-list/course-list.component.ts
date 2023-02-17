import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  constructor(
    private courseService: CourseService
  ){}

  courses: Course[] = [];
  pageSlice = this.courses.slice(0, 6);
  searchingBy: string = '';

  ngOnInit(): void {
    this.courseService.getAll().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  updateCoursesSlice(courses: Course[]){
    this.pageSlice = courses;
  }
}
