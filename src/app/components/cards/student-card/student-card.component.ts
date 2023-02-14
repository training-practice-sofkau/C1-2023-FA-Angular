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
    id: '',
    name: '',
    idNum: '',
    age: 0,
    mail: '',
    numCourses: 0
  }

  goToForm(){
    this.router.navigate(['students/edit'],{
      queryParams:{
        data: JSON.stringify(this.student)

      }
      
    })
  }


}
