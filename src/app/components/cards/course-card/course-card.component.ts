import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  constructor(private router: Router, private courseService: CourseService) {}
  @Output() reload: EventEmitter<any> = new EventEmitter();
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
  onDelete() {
    if (confirm('Course ' + this.course.name + ' Will be deleted')) {
      this.courseService.delete(this.course.courseId).subscribe({
        next: (course) => {
          if (course) {
            alert('Course deleted');
            this.reload.emit('Course deleted');
          } else {
            alert("Course hasn't been deleted");
            this.reload.emit("Course hasn't been deleted");
          }
        },
        error: console.log,
        complete: console.log,
      });
    }
  }
}
