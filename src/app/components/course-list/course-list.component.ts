import { Component, OnInit } from '@angular/core';
import {Course} from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{


  myCourses:Course[] = [];

  total:number = 0;

  constructor(private serviceCourse:CourseService,
    private studentService:StudentService) {}

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses(){
    this.serviceCourse.getAll().subscribe(
      {
        next: (res) => {this.myCourses=res
          this.myCourses.sort((a,b) => a.lastUpdated>b.lastUpdated ? 1:-1)
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

  updateAll(trigger:boolean){
    if(trigger) this.getAllCourses()
  }


}
