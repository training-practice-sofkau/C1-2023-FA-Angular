import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { EditCourseFormComponent } from '../../forms/edit-course-form/edit-course-form.component';

@Component({
  selector: 'app-edit-course-button',
  templateUrl: './edit-course-button.component.html',
  styleUrls: ['./edit-course-button.component.scss']
})
export class EditCourseButtonComponent {

  @Output() editCourse = new EventEmitter<any>();
  @Input() course:Course | undefined = undefined;
  @Input() isEdit:boolean = false;
  @Input() titleBtn : string = 'Edit';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditCourseFormComponent, {
      data: {course:this.course,isEdit:this.isEdit},
      height: '80%',
      minWidth: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.editCourse.emit(result);
    });
  }
}
