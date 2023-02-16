import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {

 page: number = 1;

  l_courses: Course[] = [
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
      {
          id: "1",
          name: "Mary Rojas",
          coach: "coach",
          level: 5,
          lastUpdated: new Date(),
          studentList: []
      },
];
  
  total: number = this.l_courses.length;
}
