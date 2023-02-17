import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  constructor(private router: Router, private service: CourseService){}
  @Input() course: Course = {
    id: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    studentList: []
  }
  //students: number = this.course.studentList.length;

  goToForm(){
    this.router.navigate(['courses/edit'],
    {queryParams: {
      data: JSON.stringify(this.course)
    }
  })
  }

  onDelete(){
    if(this.course.studentList != null){
      this.service.deleteCourse(this.course.id).subscribe({
        next: (data) => {},
        error: (err) =>{
          console.error('Error '+err)
        },
        complete:()=>{},
      });
      location.reload();
    }
    else {
      alert('The course should not have students before being deleted')
    }
}

}
