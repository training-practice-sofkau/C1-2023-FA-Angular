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
  hiddeCreateButton: boolean = false;
  hiddeUpdateButton: boolean = false;

  constructor(private builder: FormBuilder, 
    private service: StudentService, 
    private router: Router,
    private route: ActivatedRoute){
     
    }
  ngOnInit(): void {
    this.studentForm = this.builder.group(
      {
        idDTO: '',
        nameDTO: '',
        idNumDTO: '',
        ageDTO: 0,
        mailDTO: ''
      }
    );
    //this.studentForm.valueChanges.subscribe(console.log);

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.studentForm.setValue({
          idDTO: JSON.parse(info['data']).idDTO,
          nameDTO: JSON.parse(info['data']).nameDTO,
          idNumDTO: JSON.parse(info['data']).idNumDTO,
          ageDTO: JSON.parse(info['data']).ageDTO,
          mailDTO: JSON.parse(info['data']).mailDTO,
         })
      }
    } )

    this.studentForm.controls['idDTO'].value === ''?
    this.hiddeUpdateButton=true:
    this.hiddeCreateButton=true;
  }

  ngUpdateStudent(): void{
    this.service.putStudent(this.studentForm.value).subscribe(
      (answer) => {
        alert("Student was update successfully");
        console.log(answer);
      }
    )
  }

  ngSaveStudent(): void{
    this.service.postStudent(this.studentForm.value).subscribe(
    (answer) => {
      alert("Student was added successfully");
      console.log(answer);
      this.router.navigate(["/students"]);
    }
  )
  }
}
