import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    idNum: new FormControl(''),
    age: new FormControl(0),
    mail: new FormControl(''),
    course: new FormControl(null)
  });
  l_course: Course[] = [];
  studentId: string = '';
  selectedCourse: any = {};

  constructor(
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

    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.studentId = JSON.parse(info['data']);
        this.studentService.getStudentById(this.studentId).subscribe({
          next: (data) => {
            this.studentForm.patchValue(data.data);
            this.selectedCourse = data.data.course;
          },
          error: (err) =>
            console.error('Error on getting student by id: ' + err),
          complete: () => {},
        });
      }
    });

  }

  ngSaveStudent() {
    // Edit part
    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.studentService
          .editStudent(this.studentId, this.studentForm.value)
          .subscribe({
            next: (data) => {},
            error: (err) => {
              console.error('Error on update student' + err);
            },
            complete: () => {},
          });
        alert('Student updated successfully');
        this.router.navigate(['/students']);
        return;
      }

      //Save part
      this.studentService.saveStudent(this.studentForm.value).subscribe({
        next: () => {},
        error: (err) => {
          console.error('Error on save student: ' + err);
        },
        complete: () => {},
      });
      alert('Student saved successfully');
      this.router.navigate(['/students']);
      return;
    });
  }
}
