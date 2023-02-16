import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course = {
    courseId: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    students: [],
  };
  constructor(private router: Router, private service: CourseService) {}

  goToForm() {
    this.router.navigate(['courses/edit'], {
      queryParams: {
        data: JSON.stringify(this.course),
      },
    });
  }

  deleteCourse() {
    if (confirm('Are you sure to delete the course?')) {
      this.service.deleteCourse(this.course.courseId).subscribe({
        error: console.log,
        complete: console.log,
      });
      alert('The course was deleted');
      window.location.reload();
    }
  }
}
