import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {
  p: number = 0;
  l_courses: Course[] = [
    {
      id: "23",
      name: "Angular",
      coach: "Mishell",
      level: 20,
      lastUpdated: new Date(0),
      studentList: []
    },
    {
      id: "24",
      name: "Spring Boot",
      coach: "Mishell",
      level: 29,
      lastUpdated: new Date(0),
      studentList: []
    }
  ];
  total: number = this.l_courses.length;

}
