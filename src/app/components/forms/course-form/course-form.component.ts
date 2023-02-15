import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['../student-form/student-form.component.scss']
})
export class CourseFormComponent  implements OnInit{

  courseForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute){

    }
  ngOnInit(): void {
    this.courseForm = this.builder.group(
      {
        name: '',
        coach: '',
        level: 0,
      }
    );
    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.courseForm.setValue({
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
         })
      }
    } )
  }

  onSave(){
    console.log(this.courseForm.value);

  }

}
