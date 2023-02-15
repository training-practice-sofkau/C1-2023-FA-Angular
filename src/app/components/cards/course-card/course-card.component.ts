import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  constructor(private router: Router) {}
  @Input() course: Course = {
    courseId: 'n/a',
    name: 'n/a',
    coach: 'n/a',
    level: 0,
    lastUpdated: new Date(),
    studentListDTO: [],
  };

  goToForm() {
    this.router.navigate(['courses/edit'], {
      queryParams: {
        data: JSON.stringify(this.course),
      },
    });
  }
}
