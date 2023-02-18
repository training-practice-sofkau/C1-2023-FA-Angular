import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentFormComponent } from '../../forms/student-form/student-form.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  constructor(private router: Router) { }
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

  goToForm(){
    this.router.navigate(['students/edit'],{
      queryParams:{
        data: JSON.stringify(this.student),
        studentId: this.student.studentId
      }
    })
  }
}
