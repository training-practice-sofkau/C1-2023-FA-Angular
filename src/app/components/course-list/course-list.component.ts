import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  c_founded: Course[] = [];
  founded: number = 0;
  searchingBy: string = '';
  p: number = 0;
}
