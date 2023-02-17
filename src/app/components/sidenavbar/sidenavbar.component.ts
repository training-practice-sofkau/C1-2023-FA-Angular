import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student-service/student.service';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent {

  constructor(private courseService: CourseService, private studentService: StudentService, private router: Router){}


  goToStudentForm(){
    this.studentService.changeType('save');
    this.router.navigate(['students/edit'])
  }

  goToCourseForm(){
    this.courseService.changeType('save');
    this.router.navigate(['courses/edit'])
  }


}
