import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {

  studentForm: FormGroup = new FormGroup({});
  optionCourse: Course[] = []
  selected = this.data.student.course?.name || ''

  constructor(private builder: FormBuilder,
    private courseService:CourseService,
    public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){}
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.selected);
    this.courseService.getAll().subscribe({
      next: res => this.optionCourse=res
    })

    console.log(this.data.student);

    this.studentForm= this.builder.group(
      {
        id:this.data?.student?.id || '',
        name:this.data?.student?.name || '',
        age:[
        {
          value: this.data?.student?.age|| '',
          disabled: false
        },
        Validators.required,
      ],
        idNum:this.data?.student?.idNum|| '',
        mail:this.data?.student?.mail || '',
        course:this.data?.student?.course || ''
      }
    );
  }

}
