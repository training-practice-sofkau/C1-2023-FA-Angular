import { Component } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  c_founded: Course[] = [];
  selected: string = "name";
  founded: number = 0;
  searchingBy: string = '';
}
