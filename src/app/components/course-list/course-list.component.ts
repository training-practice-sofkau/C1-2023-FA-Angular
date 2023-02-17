import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  c_founded: Observable<Course[]> = new Observable<Course[]>();
  founded: number = 0;
  searchingBy: string = '';
  selected_option: string = '';


  constructor(private service: CourseService) {}

  ngSearchByParam(event: Event) {
    const element = event.target as HTMLInputElement;
    this.c_founded = this.service.filterParameterType(
      this.selected_option,
      element.value
    );
  }
}
