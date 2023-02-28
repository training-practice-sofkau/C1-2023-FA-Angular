import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { StudentsSuscribedComponent } from '../../students-suscribed/students-suscribed.component';

@Component({
  selector: 'app-show-students-button',
  templateUrl: './show-students-button.component.html',
  styleUrls: ['./show-students-button.component.scss']
})
export class ShowStudentsButtonComponent {

  @Output() studentId = new EventEmitter<boolean>();
  @Input() course:Course | undefined = undefined;


  constructor(public dialog: MatDialog) {}

  

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentsSuscribedComponent, {
      data: {course:this.course},
      height: '80%',
      minWidth: '40%',
    });

    dialogRef.componentInstance.idStudent.subscribe(
      res=>this.studentId.emit(res)
    )

  }

}
