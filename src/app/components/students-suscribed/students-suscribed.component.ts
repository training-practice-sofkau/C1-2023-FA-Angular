import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';
import { EditStudentComponent } from '../forms/edit-student/edit-student.component';

@Component({
  selector: 'app-students-suscribed',
  templateUrl: './students-suscribed.component.html',
  styleUrls: ['./students-suscribed.component.scss']
})
export class StudentsSuscribedComponent implements OnInit{

  @Output() idStudent = new EventEmitter<boolean>()
  noCourse: Student[] = []

  constructor(
    private studentService:StudentService,
    private courseService:CourseService,
    public dialogRef: MatDialogRef<StudentsSuscribedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){}


  ngOnInit(): void {
    this.getStudentsNoCourse()
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  removeStudent(stu:Student){
    
    stu.course=undefined;
    this.modifiedStateStudent(stu)
  }

  addStudentToCourse(stu:Student){
    stu.course=this.data.course
    this.modifiedStateStudent(stu)
  }

  updateModal(){
    this.getCourseById()
    this.getStudentsNoCourse()
    
  }

  getCourseById(){
    this.courseService.getCoursesByid(this.data.course.id).subscribe({
      next:res=>this.data.course=res
    }
    )
  }

  getStudentsNoCourse(){
    this.studentService.getStudentsNoCourse().subscribe({
      next: res => this.noCourse=res
    })
  }

  modifiedStateStudent(stu:Student){
    this.studentService.updateStudent(stu).subscribe(
      {
        next: res => {this.updateModal()
          this.idStudent.emit(true)}
      }
    )
  }



}
