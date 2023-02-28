import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {

  @Input() student: Student | undefined = undefined
  @Output() idStudent = new EventEmitter<string>();
  @Output() editStudent = new EventEmitter<Student>();



  sendId(id:string){
    let op = confirm("Are you sure you want to remove this?")
      if(op){
        this.idStudent.emit(id);
      }
    
  }

  sendStudent(myStudent:Student | undefined){
    this.editStudent.emit(myStudent)
  }



}
