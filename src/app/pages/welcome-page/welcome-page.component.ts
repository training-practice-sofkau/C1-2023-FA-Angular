import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private studentService: StudentService, private courseService: CourseService) { }

  courses:number=0;
  students:number=0;

  ngOnInit(): void {

    this.studentService.getAll().subscribe(students => {
      this.students=students.data.length;
    })

    this.courseService.getAll().subscribe(courses => {
      this.courses=courses.data.length;
    })

  }



}
