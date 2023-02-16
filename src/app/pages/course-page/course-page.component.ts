import { Component } from '@angular/core';
import {Course} from "../../models/course.model";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {

  l_courses: Course[] = [{
    id: "1",
    name: "Java",
    coach: "Jonathan",
    level: 3,
    lastUpdated: new Date(2023),
    studentList: [{
      id: "1",
      name: "Mary Rojas",
      idNum: "1234567890",
      age: 25,
      mail: "mary.rojas@hotmail.com",
      numCourses: 0
    }]
  },
    {
      id: "2",
      name: "Angular",
      coach: "Daniel",
      level: 2,
      lastUpdated: new Date(2022),
      studentList: []
    }];

  total: number = this.l_courses.length;

}
