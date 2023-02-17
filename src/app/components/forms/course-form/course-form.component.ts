import { Component, Input } from '@angular/core';
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
  courseIdFromUpdate = "";

  constructor(private builder: FormBuilder,
    private service: CourseService,
    private route: ActivatedRoute){

    }
  ngOnInit(): void {
    this.courseForm = this.builder.group(
      {
        name: '',
        coach: '',
        level: 0,
        lastUpdate: ""
      }
    );

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.courseFromUpdate = true;
        this.courseIdFromUpdate = info['courseId'];

        this.courseForm.setValue({
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
          lastUpdate: JSON.parse(info['data']).lastUpdated
         })
      }
    })
  }

  OnSubmit(){
    this.courseForm.value.studentsDTO = [];
    this.service.postCourse(this.courseForm.value).subscribe((answer)=>console.log(answer));
    window.alert("The user was created successfully.")
  }
  onUpdate(){
    this.courseForm.value.studentsDTO = [];
    this.service.updateCourse(this.courseForm.value, this.courseIdFromUpdate).subscribe((answer)=>console.log(answer));
    window.alert("The user was updated successfully.")
  }
}
