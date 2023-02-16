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
    studentId: '',
    name: '',
    idNum: '',
    age: 0,
    mail: '',
  }


  onDelete(): void {
    if (confirm(`Do you want to delete the student with ID: ${this.student?.studentId}?`)) {
      if (this.student) {
        this.service.deleteByID(<string>this.student?.studentId).subscribe((answer) => {
          //Fix the server response
          console.log(answer)
          alert(`Student with ID: ${this.student?.studentId} has been deleted!`)
        })
      }
    }
  }

  goToForm(){
    this.router.navigate(['students/edit'],{
      queryParams:{
        data: JSON.stringify(this.student)

      }

    })
  }


}
