import { Component } from '@angular/core';
import {Course} from "../../models/course.model";
import {formatDate, getLocaleDateFormat} from "@angular/common";

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
    lastUpdated: new Date("January 25, 2023"),
    studentList: [{
      id: "1",
      name: "Mary Rojas",
      idNum: "1234567890",
      age: 25,
      mail: "mary.rojas@hotmail.com",
      numCourses: 1
    },
    {
      id: "3",
      name: "Nicolas Pinilla",
      idNum: "12345678928",
      age: 20,
      mail: "nico.pinilla@hotmail.com",
      numCourses: 1
    }]
  },
    {
      id: "2",
      name: "Angular",
      coach: "Daniel",
      level: 2,
      lastUpdated: new Date("December 25, 2022"),
      studentList: []
    }];

  total: number = this.l_courses.length;

}
