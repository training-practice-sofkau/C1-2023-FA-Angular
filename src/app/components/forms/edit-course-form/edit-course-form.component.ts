import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: ['./edit-course-form.component.scss']
})
export class EditCourseFormComponent {

  courseForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<CourseFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){}
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.courseForm= this.builder.group(
      {
        id:this.data?.course?.id || '',
        name:this.data?.course?.name || '',
        coach:[
        {
          value: this.data?.course?.coach || '',
          disabled: false
        },
        Validators.required,
      ],
        level:this.data?.course?.level || ''
      }
    );
  }

}
