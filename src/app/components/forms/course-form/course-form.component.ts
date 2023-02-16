import { Component, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Course } from 'src/app/models/course.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  courseForm: FormGroup = new FormGroup({});

  course: Course|undefined;

  constructor(private builder: FormBuilder,
    private service: CourseService,
    private route: ActivatedRoute){
    }

    courseInitialization(): void {
      this.route.queryParams.subscribe((info)=> {
      if (JSON.stringify(info) !== JSON.stringify({})){
        this.course = {
          courseId: JSON.parse(info['data']).courseId,
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
        }
      }
      console.log(this.course)

    })}

    ngOnInit(): void {
      this.courseForm = this.builder.group(
        {
          name: '',
          coach: '',
          level: 0,
        }
      );

      this.courseInitialization();

      //Setting values of the form
      if (this.course){
        this.courseForm.setValue({
          name: this.course.name,
          coach: this.course.coach,
          level: this.course.level,
        })
      }
    }

    onSubmit(): void{
      console.log(this.course?.name)
      //Put
      if (this.course){
       this.service.update(<string>this.course.courseId,this.courseForm.value).subscribe((answer)=>{
         console.log(answer)
         alert(`Course with ID: ${answer.data.courseId} has been updated!`)
       })
      }
      //Post
      if (!this.course){
       this.service.post(this.courseForm.value).subscribe((answer)=>{
         console.log(answer)
         alert(`Course with ID: ${answer.data.courseId} has been created!`)
       });
      }
   }
}
