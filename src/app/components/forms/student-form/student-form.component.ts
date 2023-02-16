import {
  Component,
  Input,
  KeyValueDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  student: Student = {
    studentId: '',
    name: '',
    idNumber: '',
    age: 0,
    mail: '',
  };
  studentForm: FormGroup = new FormGroup({});

  constructor(
    private builder: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentForm = this.builder.group({
      name: '',
      idNumber: '',
      age: 0,
      mail: '',
    });
    //this.studentForm.valueChanges.subscribe(console.log);

    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.studentForm.setValue({
          name: JSON.parse(info['data']).name,
          idNumber: JSON.parse(info['data']).idNumber,
          age: JSON.parse(info['data']).age,
          mail: JSON.parse(info['data']).mail,
        });
        this.student.studentId = JSON.parse(info['data']).studentId;
      }
    });
  }

  onSubmit() {
    if (this.student.studentId != '') {
      this.student.age = this.studentForm['value'].age;
      this.student.mail = this.studentForm['value'].mail;
      this.student.name = this.studentForm['value'].name;
      this.student.idNumber = this.studentForm['value'].idNumber;
      this.service
        .putStudent(this.student)
        .subscribe((answer) => console.log(answer));
      alert('The student was updated');
    } else {
      this.service
        .postStudent(this.studentForm.value)
        .subscribe((answer) => console.log(answer));
      alert('The student was created');
    }
  }
}
