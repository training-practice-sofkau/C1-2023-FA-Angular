import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  constructor(private service: CourseService){}
  c_found: Course[] = [{
    id: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    studentList: [],
  }];
  found: number = 0;
  searchingBy: string = '';
  param: string = ''


ngSearch(){
  if(this.searchingBy == 'name'){
    this.service.getByName(this.param).subscribe({
      next: (course) => {
        this.c_found = course,
        this.found = course.length


      }
    })

  }
  else if(this.searchingBy == 'coach'){
    this.service.getByCoach(this.param).subscribe({
      next: (course) => {
        this.c_found = course,
        this.found = course.length

      }
    })
  }
  else {
    this.service.getByLevel(this.param).subscribe({
      next: (course) => {
        this.c_found = course,
        this.found = course.length

      }
    })
  }

}
}
