import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.scss']
})
export class ShowCoursesComponent {

  @Input() myCourses:Course[] = [];
  @Output() idCourse = new EventEmitter<string>()
  @Output() editCourse= new EventEmitter<Course>()

  total:number = 0;

  constructor() {}

  ngOnInit(): void {
    this.total=this.myCourses.length
  }


  deleteCourse(id:string){
    this.idCourse.emit(id)
  }

  updateCourse(course:Course){
    this.editCourse.emit(course)
  }

}
