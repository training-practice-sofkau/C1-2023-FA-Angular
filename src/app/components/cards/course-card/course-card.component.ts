import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  @Input() course: Course | undefined = undefined;
  @Output() idCourse = new EventEmitter<string>();
  @Output() editCourse = new EventEmitter<Course>();



  sendId(id:string){
    let op = confirm("Are you sure you want to remove this?")
      if(op){
        this.idCourse.emit(id);
      }
    
  }

  sendCourse(myCourse:Course){
    this.editCourse.emit(myCourse)
  }

}
