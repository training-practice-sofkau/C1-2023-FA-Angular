import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {

  constructor(private router: Router, private service: StudentService) { }

  @Input() student: Student = {
    id: 0,
    name: '',
    idNum: '',
    age: 0,
    mail: '',
  }

  @Output()
 someEvent = new EventEmitter();

  goToForm(){
    this.router.navigate(['students/edit'],{
      queryParams:{
        data: JSON.stringify(this.student)

      }
      
    })
  }

  deleteStudent(param: number){
      if(confirm("Do you really want to delete?"))
          {
              this.service.deleteStudent(param).subscribe(() => this.someEvent.emit(null));
          }

  }


}
