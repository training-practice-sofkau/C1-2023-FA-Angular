import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { EditStudentComponent } from '../../forms/edit-student/edit-student.component';

@Component({
  selector: 'app-edit-student-button',
  templateUrl: './edit-student-button.component.html',
  styleUrls: ['./edit-student-button.component.scss']
})
export class EditStudentButtonComponent {

  @Output() editStudent = new EventEmitter<any>();
  @Input() student: Student | undefined = undefined;
  @Input() isEdit:boolean = false;
  @Input() titleBtn : string = 'Edit';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      data: {student:this.student,isEdit:this.isEdit},
      height: '80%',
      minWidth: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.editStudent.emit(result);
    });
  }

}
