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
  studentForm: FormGroup = new FormGroup({});

  constructor(
    private builder: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.studentForm = this.builder.group({
      studentId: '',
      name: '',
      idNum: '',
      age: '',
      mail: '',
    });
    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.studentForm.setValue({
          studentId: JSON.parse(info['data']).studentId,
          name: JSON.parse(info['data']).name,
          idNum: JSON.parse(info['data']).idNum,
          age: JSON.parse(info['data']).age,
          mail: JSON.parse(info['data']).mail,
        });
      }
    });
  }
  onSave() {
    if (this.checkData('save')) {
      console.log(this.studentForm.value);
    }
  }
  onCreate() {
    if (
      this.checkData(
        this.studentForm.value.studentId === '' ? 'create' : 'duplicate'
      )
    ) {
      console.log(this.studentForm.value);
    }
  }

  checkData(action: string): boolean {
    if (
      this.studentForm.value.name === '' &&
      this.studentForm.value.coach === '' &&
      this.studentForm.value.level === '' &&
      this.studentForm.value.mail === ''
    ) {
      alert(
        'You have to fill all the information to ' + action + ' the course'
      );
      return false;
    } else if (this.studentForm.value.name === '') {
      alert('You have write a name to ' + action + ' the course');
      return false;
    } else if (this.studentForm.value.idNum === null || this.studentForm.value.idNum === '') {
      alert('You have write an id number to ' + action + ' the course');
      return false;
    } else if (this.studentForm.value.age === null || this.studentForm.value.age === '') {
      alert('You have write an age to ' + action + ' the course');
      return false;
    } else if (this.studentForm.value.mail === '') {
      alert('You have write a mail to ' + action + ' the course');
      return false;
    } else if (
      this.studentForm.value.name != '' &&
      this.studentForm.value.coach != '' &&
      this.studentForm.value.level != '' &&
      this.studentForm.value.mail != ''
    ) {
      return true;
    } else {
      alert(
        'You have to fill all the information to ' + action + ' the course'
      );
      return false;
    }
  }
}
