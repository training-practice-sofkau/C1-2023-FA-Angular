import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  constructor(
    private router: Router,
    private courseService: CourseService
    ) {}
  @Input() course: Course = {
    courseId: "",
    name: "",
    coach: "",
    level: 0,
    lastUpdated: new Date("2023-05-16"),
    studentsDTO: []
  }
  @Output() courseDeleted = new EventEmitter<Course>();

  goToForm(){
    this.router.navigate(['courses/edit'],{
      queryParams:{
        data: JSON.stringify(this.course),
        courseId: this.course.courseId
      }
    })
  }

  onDelete(){
    let userConfirm: boolean = confirm("Are you sure you want to delete this artist?")
    if (userConfirm){
      this.courseService.deleteCourse(this.course.courseId).subscribe((answer)=>console.log(answer));
      window.alert("Course deleted successfully.");
      this.courseDeleted.emit(this.course);
    }
  }
}
