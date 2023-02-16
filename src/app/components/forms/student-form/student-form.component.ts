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

  constructor(private builder: FormBuilder, 
    private service: StudentService,
    private router:Router){
     
    }
  ngOnInit(): void {
    this.studentForm = this.builder.group(
      {
        name: '',
        idNum: '',
        age: 0,
        mail: ''
      }
    );
  }

  sendStudent(){
    this.service.saveStudent(this.studentForm.getRawValue()).subscribe({
      next: (res) => {
        if (res == null) {
          alert("We can't save this course");
        } else {
          alert('Course save');
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['./students']));
        }
      },
      error: console.log,
    });
  }

}
