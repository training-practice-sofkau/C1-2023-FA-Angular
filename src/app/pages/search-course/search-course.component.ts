import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { filterCourse } from 'src/app/utils/dataForHtml';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss'],
})
export class SearchCourseComponent {
  dataSelector: string[] = filterCourse;
  courseSearch: Course[] = [];

  constructor(private courseService: CourseService) {}

  searchBy(search: any) {
    switch (search?.myFilter) {
      case 'name':
        this.getByNameFilter(search?.paramSearch);
        break;
      case 'coach':
        this.getByCoachFilter(search?.paramSearch)
        break;
      case 'level':
        this.getByLevelFilter(search?.paramSearch)
        break;
      default:
        console.log('filter invalid');
    }
  }

  getByNameFilter(name: string) {
    this.courseService.getCoursesByName(name).subscribe({
      next: (res) => {this.courseSearch = res
        this.courseSearch.sort((a,b) => a.lastUpdated>b.lastUpdated ? 1:-1)},
      error: console.log,
      complete: console.log,
    });
  }

  getByCoachFilter(name:string){
    this.courseService.getCoursesByCoach(name).subscribe({
      next: (res) => {this.courseSearch = res
        this.courseSearch.sort((a,b) => a.lastUpdated>b.lastUpdated ? 1:-1)},
      error: console.log,
      complete: console.log,
    });
  }

  getByLevelFilter(name:number){
    this.courseService.getCoursesByLevel(name).subscribe({
      next: (res) => {this.courseSearch = res
        this.courseSearch.sort((a,b) => a.lastUpdated>b.lastUpdated ? 1:-1)},
      error: console.log,
      complete: console.log,
    });
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id).subscribe({
      next: (res) => {
        alert(res);
      },
      error: console.log,
    });
  }

  updateCourse(editCourse: Course) {
    this.courseService.updateCourse(editCourse).subscribe({
      next: (res) => {
        alert('Course updated');
      },
      error: console.log,
    });
  }
}
