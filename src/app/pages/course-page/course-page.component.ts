import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit{
  p: number = 0;
  l_courses: Course[] = [];
  total: number = this.l_courses.length;

  constructor(private service: CourseService){}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (course) =>{
        
        this.l_courses = course;
        this.total = this.l_courses.length;
         
      },
      error: (console.log),
      complete:(console.log)
    });
  }
}
