import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentService} from "../../../services/student-service/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit{

  constructor(
    private builder: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute
  ) {
  }
  courseForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.courseForm = this.builder.group({
      name: '',
      coach: '',
      level: 0,
    });
    //this.studentForm.valueChanges.subscribe(console.log);

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.courseForm.setValue({
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
        })
      }
    });
  }

}
