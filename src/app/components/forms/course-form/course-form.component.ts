import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({});

  constructor(
    private builder: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseForm = this.builder.group({
      name: '',
      coach: [
        {
          value: '',
          disabled: false,
        },
        Validators.required,
      ],
      level: '',
    });
  }

  sendCourse() {
    this.courseService.saveCourse(this.courseForm.getRawValue()).subscribe({
      next: (res) => {
        if (res == null) {
          alert("We can't save this course");
        } else {
          alert('Course save');
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['./courses']));
        }
      },
      error: console.log,
    });
  }
}
