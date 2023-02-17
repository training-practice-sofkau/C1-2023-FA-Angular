import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {

  l_courses: Course[] = [{
    courseId: "1",
    name: "Development [English]",
    coach: "Mishell",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
{
    courseId: "2",
    name: "Development",
    coach: "Ricardo Milos",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
  {
    courseId: "3",
    name: "Testing",
    coach: "Another Ricardo Milos",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
  {
    courseId: "4",
    name: "Project Management",
    coach: "Ricarda Milan",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
  {
    courseId: "5",
    name: "UI/UX",
    coach: "Richard Milos",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
  {
    courseId: "3",
    name: "Testing",
    coach: "Another Ricardo Milos",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
  {
    courseId: "4",
    name: "Project Management",
    coach: "Ricarda Milan",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
  {
    courseId: "5",
    name: "UI/UX",
    coach: "Richard Milos",
    level: 1,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  },
];
  pageSlice = this.l_courses.slice(0, 6);

  total: number = this.l_courses.length;

  updateCoursesSlice(courses: Course[]){
    this.pageSlice = courses;
  }

}
