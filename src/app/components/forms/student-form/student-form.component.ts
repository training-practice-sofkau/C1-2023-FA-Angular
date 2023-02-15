import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({});
  selectedCourse: string = '';
  l_course: Course[] = [];

  constructor(
    private builder: FormBuilder,
    private studentService: StudentService,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseService.getAll().subscribe({
      next: (data) => {
        this.l_course = data.data;
      },
      error: (err) => {
        console.error('Error on getting course data' + err);
      },
      complete: () => {},
    });

    this.studentForm = this.builder.group({
      name: '',
      idNum: '',
      age: 0,
      mail: '',
      course: {}
    });

    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.studentForm.setValue({
          name: JSON.parse(info['data']).name,
          idNum: JSON.parse(info['data']).idNum,
          age: JSON.parse(info['data']).age,
          mail: JSON.parse(info['data']).mail,
        });
      }
    });
  }

  ngSaveStudent() {
    this.studentService.saveStudent(this.studentForm.value).subscribe({
      next: (data) => {},
      error: (err) => {
        console.error('Error on create student' + err);
      },
      complete: () => {},
    });
    //this.router.navigate(['/students']);
    console.log(this.studentForm.value);
  }
}
