import { Component, OnInit } from '@angular/core';
import {Course} from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{


  myCourses:Course[] = [];

  total:number = 0;

  constructor(private serviceCourse:CourseService) {}

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses(){
    this.serviceCourse.getAll().subscribe(
      {
        next: (res) => {this.myCourses=res
        this.total=this.myCourses.length
        },
        error: console.error,
        complete: console.log
      }
    )
  }

  deleteCourse(id:string){
    this.serviceCourse.deleteCourse(id).subscribe({
      next: res => {alert(res)
      this.getAllCourses()},
      error:console.log
    })
  }

  updateCourse(editCourse:Course){
    this.serviceCourse.updateCourse(editCourse).subscribe({
      next: res => {
        alert("Course updated")
        this.getAllCourses()},
      error: console.log
    })
  }


}
