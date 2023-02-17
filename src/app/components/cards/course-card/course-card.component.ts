import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  constructor(private router: Router) { }
  @Input() course: Course = {
    courseId: "",
    name: "",
    coach: "",
    level: 0,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  }

  goToForm(){
    this.router.navigate(['courses/edit'],{
      queryParams:{
        data: JSON.stringify(this.course)
      }
    })
  }
}
