import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  constructor(private service: CourseService){}
  l_courses: Course[] = [];
  total: number = 0;
  page= 0;

  ngOnInit(): void{
    this.service.getAll().subscribe({
      next: (course) => {
        this.l_courses = course,
        this.total = course.length
      },
      error: (console.log),
    complete: (console.log)
    })
  }

}
