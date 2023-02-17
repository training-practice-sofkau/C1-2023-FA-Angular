import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit{

  studentForm: FormGroup = new FormGroup({});
  input = new FormControl('', [Validators.required]);

  constructor(private builder: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute){}

    type: string = '';

    ngOnInit(): void {
      this.type = this.service.getType();
      this.studentForm = this.builder.group(
        {
          id: '',
          name: '',
          idNum: '',
          age: 0,
          mail: ''
        });

      this.route.queryParams.subscribe((info) => {
        if(JSON.stringify(info) !== JSON.stringify({})){
          this.studentForm.setValue({
            id: JSON.parse(info['data']).id,
            name: JSON.parse(info['data']).name,
            idNum: JSON.parse(info['data']).idNum,
            age: JSON.parse(info['data']).age,
            mail: JSON.parse(info['data']).mail,
          })
        }
      })
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  onSubmit(){
    this.service.postStudent(this.studentForm.value).subscribe(
      (answer) => console.log(answer)
      );
  }

  onUpdate() {
    this.service.updateStudent(this.studentForm.value);
  }



}
