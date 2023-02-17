import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  courseForm: FormGroup = new FormGroup({});
  hiddeCreateButton: boolean = false;
  hiddeUpdateButton: boolean = false;

  constructor(private builder: FormBuilder,
    private service: CourseService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.courseForm = this.builder.group(
      {
        idDTO: '',
        nameDTO: '',
        coachDTO: '',
        levelDTO: 0,
        lastUpdatedDTO: new Date(0)
      },
    );

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.courseForm.setValue({
        idDTO: JSON.parse(info['data']).idDTO,
        nameDTO: JSON.parse(info['data']).nameDTO,
        coachDTO: JSON.parse(info['data']).coachDTO,
        levelDTO: JSON.parse(info['data']).levelDTO,
        lastUpdatedDTO: JSON.parse(info['data']).lastUpdatedDTO,
        })
      }
    })
    this.courseForm.controls['idDTO'].value === ''?
    this.hiddeUpdateButton=true:
    this.hiddeCreateButton=true;
  }

  ngUpdateCourse(): void{
    this.service.updateCourse(this.courseForm.value).subscribe(
      (answer) => {
        alert("Course was update successfully");
        console.log(answer);
        this.router.navigate(["/courses"]);
      }
    )
  }

  ngSaveCourse(): void{
    this.service.saveCourse(this.courseForm.value).subscribe(
    (answer) => {
      alert("Course was added successfully");
      console.log(answer);
      this.router.navigate(["/courses"]);
    }
  )
  }

}
