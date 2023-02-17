import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CoursePageComponent } from 'src/app/pages/course-page/course-page.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  course: CoursePageComponent = new CoursePageComponent();
  coursesFound: Course[] = this.course.l_courses;
  founded: number = this.coursesFound.length;
  pageSlice = this.coursesFound.slice(0, 6);
  searchingBy: string = '';

  updateCoursesSlice(courses: Course[]){
    this.pageSlice = courses;
  }
}
