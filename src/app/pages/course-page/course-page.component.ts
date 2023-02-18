import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  l_courses: Course[] = [];
  total: number = this.l_courses.length;
  p: number = 1;

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (courses) => {
        this.l_courses = courses.data,
        //console.log(courses.data)
        this.total = this.l_courses.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

}
