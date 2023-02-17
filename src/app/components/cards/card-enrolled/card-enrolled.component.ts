import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-card-enrolled',
  templateUrl: './card-enrolled.component.html',
  styleUrls: ['./card-enrolled.component.scss']
})
export class CardEnrolledComponent {
  constructor(
      private router: Router, 
      private service: CourseService,
      private route: ActivatedRoute,
  ) { }

  @Input() student: Student = {
    id: 0,
    name: '',
    idNum: '',
    age: 0,
    mail: '',
  }

  @Output()
 someEvent = new EventEmitter();

 enroll(studentId: number){
     this.route.queryParams
     .subscribe(params => {
         this.service.enrollStudent(JSON.parse(params['data']), studentId).subscribe(() => this.router.navigate(['courses']));
     })

 }


}
