import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {

  constructor (private service: CourseService){}

  l_courses: Course[] = [];
  total: number = 0;
   p: number = 1;
  count: number = 3;

  ngOnInit(){
    this.service.getAll().subscribe({
      next: (course) => {
        this.l_courses = course,
        this.total = this.l_courses.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  };


}
