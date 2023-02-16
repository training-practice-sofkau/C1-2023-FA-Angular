import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['../student-form/student-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup = new FormGroup({});

  constructor(
    private builder: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseForm = this.builder.group({
      courseId: '',
      name: '',
      coach: '',
      level: '',
    });
    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.courseForm.setValue({
          courseId: JSON.parse(info['data']).courseId,
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
        });
      }
    });
  }

  setFormValues(course: Course) {
    this.courseForm.setValue({
      courseId: course.courseId,
      name: course.name,
      coach: course.coach,
      level: course.level,
    });
  }

  onSave() {
    if (this.checkData('save')) {
      this.courseService.saveNew(this.courseForm.value).subscribe({
        next: (course) => {
          this.setFormValues(course);
        },
        error: console.log,
        complete: console.log,
      });
    }
  }
  update() {
    if (this.checkData('save')) {
      this.courseService.update(this.courseForm.value).subscribe({
        next: (course) => {
          this.setFormValues(course);
        },
        error: console.log,
        complete: console.log,
      });
    }
  }
  onCreate() {
    if (
      this.checkData(
        this.courseForm.value.courseId === '' ? 'create' : 'duplicate'
      )
    ) {
      if(this.courseForm.value.courseId === ''){
        this.onSave();
      }else{
        this.update();
      }
    }
  }

  checkData(action: string): boolean {
    if (
      this.courseForm.value.name === '' &&
      this.courseForm.value.coach === '' &&
      this.courseForm.value.level === ''
    ) {
      alert(
        'You have to fill all the information to ' + action + ' the course'
      );
      return false;
    } else if (this.courseForm.value.name === '') {
      alert('You have write a name to ' + action + ' the course');
      return false;
    } else if (this.courseForm.value.coach === '') {
      alert("You have write a coach's name to " + action + ' the course');
      return false;
    } else if (
      this.courseForm.value.level === null ||
      this.courseForm.value.level === ''
    ) {
      alert('You have write a level to ' + action + ' the course');
      return false;
    } else if (
      this.courseForm.value.name != '' &&
      this.courseForm.value.coach != '' &&
      this.courseForm.value.level != ''
    ) {
      return true;
    } else {
      alert(
        'You have to fill all the information to ' + action + ' the course'
      );
      return false;
    }
  }
}
