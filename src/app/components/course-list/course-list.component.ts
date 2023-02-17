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
  totalPages: number = 1;
  currentPage: number = 1;

  calculatePages() {
    this.totalPages =
    this.totalResults % 3 > 0
      ? (this.totalResults - (this.totalResults % 3)) / 3 + 1
      : this.totalResults / 3;
  }
  passPage(index: number) {
    this.currentPage = index;
  }

  onSearch() {
    if (this.searchParams != '' && this.searchBy != '') {
      this.isSearch = true;
      switch (this.searchBy) {
        case 'name':
          this.service.getByName(this.searchParams).subscribe({
            next: (courses) => {
              this.courses = [...courses];
              this.totalResults = courses.length;
              this.calculatePages();
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
              this.calculatePages();
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
                this.calculatePages();
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
