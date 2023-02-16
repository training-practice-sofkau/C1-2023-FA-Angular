import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course: Course = {
    id: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
  };

  constructor(private router: Router, private courseService: CourseService) {}

  delete() {
    if (confirm(`Are you sure to delete te course ${this.course.name}?`)) {
      this.courseService.deleteCourse(this.course.id).subscribe({
        next: (data) => {},
        error: (err) => {
          console.error('Error on delete course:' + err);
        },
        complete: () => {},
      });
      alert('Course deleted successfully');
      location.reload();
    }
  }

  goToForm() {
    this.router.navigate(['courses/edit'], {
      queryParams: {
        data: JSON.stringify(this.course.id),
      },
    });
  }
}
