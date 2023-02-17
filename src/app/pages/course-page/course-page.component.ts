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

  constructor(
    private courseService: CourseService
  ){}

  ngOnInit(): void {
    this.courseService.getAll().subscribe({
      next: (data) => {
        this.l_courses = data.data;
        this.l_courses.sort((a, b) => a.name.localeCompare(b.name));
        this.total = this.l_courses.length;
      },
      error: (err) => {console.error("Error on getting student data" + err);},
      complete: () => {}
    });
  }
}
