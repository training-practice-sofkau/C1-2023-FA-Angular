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
  l_course: Course[] = [];
  currentCourse: any={};

  constructor(private builder: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router){ }


  ngOnInit(): void {
    this.courseService.getAll().subscribe({
      next: (course) => {
        this.l_course = course;
        console.log(this.l_course);
      },
      error: (console.log),
      complete: (console.log)

    });

    this.studentForm = this.builder.group(
      {
        id: '',
        name: '',
        idNum: '',
        age: 0,
        mail: '',
        course: null
      }
    );

    //this.studentForm.valueChanges.subscribe(console.log);

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.currentCourse = JSON.parse(info['data']).course
        this.studentForm.setValue({
          id: JSON.parse(info['data']).id,
          name: JSON.parse(info['data']).name,
          idNum: JSON.parse(info['data']).idNum,
          age: JSON.parse(info['data']).age,
          mail: JSON.parse(info['data']).mail,
          course: JSON.parse(info['data']).course
         })

      }


    } )


  }

  onSubmit(){
    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
    console.log(this.studentForm.value)
    this.service.putStudent(this.studentForm.value).subscribe((answer) =>
    console.log(answer));

    this.router.navigate(['/students'])
    }
    else{
      this.service.postStudent(this.studentForm.value).subscribe((answer)=>
      console.log(answer));
      this.router.navigate(['/students'])
    }
  })
}





}
