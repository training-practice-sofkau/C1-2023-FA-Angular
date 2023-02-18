import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentFormComponent } from '../../forms/student-form/student-form.component';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  constructor(
    private router: Router,
    private studentService: StudentService
    ) { }
  @Input() student: Student = {
    studentId: '',
    name: '',
    dni: '',
    age: 0,
    email: '',
    numCourses: 0,
    courseDTO: {
      courseId: "",
      name: "",
      coach: "",
      level: 0,
      lastUpdated: new Date("2022-02-16"),
      studentsDTO: []
    }
  }
  @Output() studentDeleted = new EventEmitter<Student>();

  goToForm(){
    this.router.navigate(['students/edit'],{
      queryParams:{
        data: JSON.stringify(this.student),
        studentId: this.student.studentId
      }
    })
  };

  onDelete(){
    let userConfirm: boolean = confirm("Are you sure you want to delete this artist?")
    if (userConfirm){
      this.studentService.deleteStudent(this.student.studentId).subscribe((answer)=>console.log(answer));
      window.alert("Course deleted successfully.");
      this.studentDeleted.emit(this.student);
    }
  }
}
