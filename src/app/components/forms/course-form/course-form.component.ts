import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit{

  courseForm: FormGroup = new FormGroup({})

  constructor(
    private builder: FormBuilder
  ){}

  ngOnInit(): void {
    this.courseForm = this.builder.group({
      name: '',
      coach: '',
      level: 0,
    });
  }

  ngSaveCourse(){}
}
