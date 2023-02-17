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
export class StudentFormComponent implements OnInit{

  studentForm: FormGroup = new FormGroup({});
  studentFromUpdate = false;

  constructor(private builder: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute){

    }
  ngOnInit(): void {
    this.studentForm = this.builder.group(
      {
        name: '',
        dni: '',
        age: 0,
        email: ''
      }
    );

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.studentFromUpdate = true;

        this.studentForm.setValue({
          name: JSON.parse(info['data']).name,
          idNum: JSON.parse(info['data']).idNum,
          age: JSON.parse(info['data']).age,
          mail: JSON.parse(info['data']).mail,
         })
      }
    })
  }
}
