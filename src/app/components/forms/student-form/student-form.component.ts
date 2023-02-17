import { Component, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup = new FormGroup({});

  student: Student|undefined;
 /*  updateCourse:boolean = false; */

  constructor(private builder: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute) {

  }

  studentInitialization(): void {
    this.route.queryParams.subscribe((info)=> {
    if (JSON.stringify(info) !== JSON.stringify({})){
      this.student = {
        studentId: JSON.parse(info['data']).studentId,
        name: JSON.parse(info['data']).name,
        idNum: JSON.parse(info['data']).idNum,
        mail: JSON.parse(info['data']).mail,
        age: JSON.parse(info['data']).age,
        course: JSON.parse(info['data']).course
      }
    }
    console.log(this.student)

  })}

  ngOnInit(): void {
    this.studentForm = this.builder.group(
      {
        name: '',
        idNum: '',
        age: 0,
        mail: '',
        course: {}
      }
    );
    //this.studentForm.valueChanges.subscribe(console.log);

    this.studentInitialization();

    //Setting values of the form
    if (this.student){
      this.studentForm.setValue({
        name: this.student.name,
        idNum: this.student.idNum,
        age: this.student.age,
        mail: this.student.mail,
        course: this.student.course
      })
    }

  }

  onSubmit(): void{
     console.log(this.student?.name)
     //Put
     if (this.student){
      this.service.update(<string>this.student.studentId,this.studentForm.value).subscribe((answer)=>{
        console.log(answer)
        alert(`Student with ID: ${answer.data.studentId} has been updated!`)
      })
     }
     //Post
     if (!this.student){
      delete this.studentForm.value.course;
      this.service.post(this.studentForm.value).subscribe((answer)=>{
        console.log(answer)
        alert(`Student with ID: ${answer.data.studentId} has been created!`)
      });
     }
  }

}
