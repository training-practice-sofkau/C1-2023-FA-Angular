import { Component, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit{

  studentForm: FormGroup = new FormGroup({});
  studentFromUpdate = false;
  studentIdFromUpdate = "";
  courses: Course[] = [];
  courseSelected = "option";

  constructor(private builder: FormBuilder,
    private service: StudentService,
    private courseService: CourseService,
    private route: ActivatedRoute){

    }


  ngOnInit(): void {
    this.studentForm = this.builder.group(
      {
        name: '',
        dni: '',
        age: 0,
        email: '',
        course: ""
      })
    this.courseService.getAll().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (console.log),
      complete: (console.log)
    })

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.studentFromUpdate = true;
        this.studentIdFromUpdate = info['studentId'];
        this.courseSelected = JSON.parse(info['data']).courseDTO.name;

        this.studentForm.setValue({
          name: JSON.parse(info['data']).name,
          dni: JSON.parse(info['data']).dni,
          age: JSON.parse(info['data']).age,
          email: JSON.parse(info['data']).email,
          course: JSON.parse(info['data']).courseDTO.name
         })
      }
    })
  }

  OnSubmit(){
    let course: Course;
    let student: any;
    this.courseService.getByName(this.courseSelected, this.courses).subscribe(
      courses => {
        if (courses != null){
          course = courses[0];
          console.log(course)

          student = {
            name: this.studentForm.value.name,
            dni: this.studentForm.value.dni,
            age: this.studentForm.value.age,
            email: this.studentForm.value.email,
            courseDTO: course
          }
          this.service.postStudent(student).subscribe((answer)=>console.log(answer));
          window.alert("The user was created successfully.")
        }
  });
  }

  OnUpdate(){
    let course: Course;
    let student: any;
    this.courseService.getByName(this.courseSelected, this.courses).subscribe(
      courses => {
        if (courses != null){
          course = courses[0];
          console.log(course)

          student = {
            name: this.studentForm.value.name,
            dni: this.studentForm.value.dni,
            age: this.studentForm.value.age,
            email: this.studentForm.value.email,
            courseDTO: course
          }
          this.service.update(student, this.studentIdFromUpdate).subscribe((answer)=>console.log(answer));
          window.alert("The user was updated successfully.")
        }
  });
  }
}
