import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  course: Course = {
    courseId: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    students: [],
  };
  courseForm: FormGroup = new FormGroup({});

  constructor(
    private builder: FormBuilder,
    private service: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseForm = this.builder.group({
      name: '',
      coach: '',
      level: 0,
    });

    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.courseForm.setValue({
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
        });
        this.course.courseId = JSON.parse(info['data']).courseId;
      }
    });
  }

  onSubmit() {
    if (this.course.courseId != '') {
      this.course.name = this.courseForm['value'].name;
      this.course.coach = this.courseForm['value'].coach;
      this.course.level = this.courseForm['value'].level;
      this.service
        .putCourse(this.course)
        .subscribe((answer) => console.log(answer));
      alert('The course was updated');
    } else {
      this.service
        .postCourse(this.courseForm.value)
        .subscribe((answer) => console.log(answer));
      alert('The course was created');
    }
  }
}
