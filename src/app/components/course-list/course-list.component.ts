import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  constructor(private service: CourseService) {}

  searchBy: string = '';
  isSearch: boolean = false;
  courses: Course[] = [];
  totalResults: number = 0;
  searchParams: string = '';

  onSearch() {
    if (this.searchParams != '' && this.searchBy != '') {
      this.isSearch = true;
      switch (this.searchBy) {
        case 'name':
          this.service.getByName(this.searchParams).subscribe({
            next: (courses) => {
              this.courses = [...courses];
              this.totalResults = courses.length;
            },
            error: console.log,
            complete: console.log,
          });
          break;
        case 'coach':
          this.service.getByCoach(this.searchParams).subscribe({
            next: (courses) => {
              this.courses = [...courses];
              this.totalResults = courses.length;
            },
            error: console.log,
            complete: console.log,
          });
          break;
          case 'level':
            this.service.getByLevel(this.searchParams).subscribe({
              next: (courses) => {
                this.courses = [...courses];
                this.totalResults = courses.length;
              },
              error: console.log,
              complete: console.log,
            });
            break;
        default:
          alert('Select a valid option to search');
          break;
      }
    } else {
      alert('Type something and select and option to search');
    }
  }
}
