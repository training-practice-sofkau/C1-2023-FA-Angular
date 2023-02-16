import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  constructor(private router: Router, private service: CourseService) { }

  @Input() course: Course = {
    courseId: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    studentList: []
  }

  onDelete(): void {
    if (confirm(`Do you want to delete the course with ID: ${this.course?.courseId}?`)) {
      if (this.course) {
        this.service.deleteByID(<string>this.course?.courseId).subscribe((answer) => {
          //Fix the server response
          console.log(answer)
          alert(`Course with ID: ${this.course?.courseId} has been deleted!`)
        })
      }
    }
  }


  goToForm(): void {
    this.router.navigate(['courses/edit'], {
      queryParams: {
        data: JSON.stringify(this.course)
      }

    })
  }
}
