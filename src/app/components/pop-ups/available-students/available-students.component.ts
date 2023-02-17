import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-available-students',
  templateUrl: './available-students.component.html',
  styleUrls: ['./available-students.component.scss']
})
export class AvailableStudentsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Course, private service: StudentService) {}

  l_students: Student[] = [];
  p: number = 1;
  total: number = this.l_students.length;


  getAllStudents(): any {
    this.service.getAll().subscribe({
      next: (students) => {
        return students.data
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  getAllAvailable(allStudents: Student[]): void {
    this.l_students= allStudents
    this.total = this.l_students.length
    //.filter(student => student.course!== undefined)
  }

  ngOnInit(): void {
    //this.getAllAvailable(this.getAllStudents())

    console.log(this.data.coach)

    this.service.getAll().subscribe({
      next: (students) => {
        this.l_students = students.data,
        console.log(students.data)
        this.l_students=this.l_students
          .filter(student => student.course?.courseId !== this.data.courseId);
        this.total = this.l_students.length;
      },
      error: (console.log),
      complete: (console.log)
    })

  }


}
