import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor(private router: Router, private service: CourseService){}

  @Input() course: Course = {
    id: 0,
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    enrolledStudents: []
  }

  @Output() someEvent = new EventEmitter();


  goToForm(){
      this.router.navigate(['courses/edit'],{
          queryParams:{
              data: JSON.stringify(this.course)

          }

      })
  }

  goToAddStudent(){
      this.router.navigate(['courses/add-student'],{
          queryParams:{
              data: JSON.stringify(this.course.id)

          }

      })
  }

  deleteCourse(param: number){
      if(confirm("Do you really want to delete?"))
          {
              this.service.deleteCourse(param).subscribe(() => this.someEvent.emit(null));
          }

  }

  removeStudent(courseId: number, studentId: number ){
      if(confirm("Do you really want to delete?"))
          {
              this.service.removeStudent(courseId, studentId).subscribe(() => this.someEvent.emit(null));
          }
  }
}
