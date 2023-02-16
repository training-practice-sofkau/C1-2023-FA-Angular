import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {

  studentForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){}
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
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
      }
    );
  }

}
