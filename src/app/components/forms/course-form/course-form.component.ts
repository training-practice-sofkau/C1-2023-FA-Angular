import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    coach: new FormControl(''),
    level: new FormControl(0),
  });
  courseId: string = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.courseId = JSON.parse(info['data']);
        this.courseService.getCourseById(this.courseId).subscribe({
          next: (data) => {
            this.courseForm.patchValue(data.data);
          },
          error: (err) =>
            console.error('Error on getting course by id: ' + err),
          complete: () => {},
        });
      }
    });
  }

  ngSaveCourse() {
    // Edit part
    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.courseService
          .editCourse(this.courseId, this.courseForm.value)
          .subscribe({
            next: (data) => {},
            error: (err) => {
              console.error('Error on update course' + err);
            },
            complete: () => {},
          });
        alert('Course updated successfully');
        this.router.navigate(['/courses']);
        return;
      }

      //Save part
      this.courseService.saveCourse(this.courseForm.value).subscribe({
        next: () => {},
        error: (err) => {
          console.error('Error on save course: ' + err);
        },
        complete: () => {},
      });
      alert('Course saved successfully');
      this.router.navigate(['/courses']);
      return;
    });
  }
}
