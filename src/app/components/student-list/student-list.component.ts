import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService:StudentService) {}

  l_students: Student[] = []
  total:number=0;

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(){
    this.studentService.getAll().subscribe(
      {
        next: res => {this.l_students=res
          this.l_students.sort((a,b) => a.name>b.name ? 1 : -1)
        this.total=this.l_students.length
        },
        error: console.log
      }
    )
  }

  deleteStudent(id:string){
    this.studentService.deleteStudent(id).subscribe({
      next: res => {alert(res)
        this.getAllStudents()},
        error:console.log
      })
  }

  updateStudent(std:Student){
    this.studentService.updateStudent(std).subscribe({
      next: res => {
        alert("Course updated")
        this.getAllStudents()},
      error: console.log
    })
  }
  




}
