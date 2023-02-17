import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';
import { StudentFormComponent } from '../../forms/student-form/student-form.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  constructor(private router: Router, private service: StudentService) { }
  @Input() student: Student = {
    id: '',
    name: '',
    idNum: '',
    age: 0,
    mail: '',
    course: {
      id: '',
      name: '',
      coach: '',
      level: 0,
      lastUpdated: new Date(),
      studentList: []

    },
    //numCourses: 0
  }

  goToForm(){
    this.router.navigate(['students/edit'],{
      queryParams:{
        data: JSON.stringify(this.student)

      }

    })
  }
  onDelete(){
    console.log(this.student.id)
    this.service.deleteStudent(this.student.id).subscribe({
      next: (data) => {},
      error: (err) =>{
        console.error('Error '+err)
      },
      complete:()=>{},
    });
    location.reload();


  }


}
