import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  courseForm: FormGroup = new FormGroup({});
  courseFromUpdate = false;

  constructor(private builder: FormBuilder,
    private service: CourseService,
    private courseRoute: ActivatedRoute){

    }
  ngOnInit(): void {
    this.courseForm = this.builder.group(
      {
        name: '',
        coach: '',
        level: 0,
        studentsList: []
      }
    );

    this.courseRoute.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.courseFromUpdate = true;

        this.courseForm.setValue({
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
          studentsList: JSON.parse(info['data']).studentsList,
         })
      }
    })
  }
}
