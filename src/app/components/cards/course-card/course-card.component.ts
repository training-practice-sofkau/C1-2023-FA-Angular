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
    id: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    studentList: []
  }

  goToForm(){
    this.router.navigate(['course/edit'],{
      queryParams:{
        data: JSON.stringify(this.course)

      }
      
    })
  }
}
