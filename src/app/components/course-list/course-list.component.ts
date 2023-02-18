import { Component, Input, OnInit} from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit{
  constructor(
    private courseService: CourseService
  ){}

  courses: Course[] = [];
  results: Course[] = [];
  pageSlice: Course[] = [];

  @Input() searchingBy: string = '';
  filterOption: string = "";

  ngOnInit(): void {
    this.courseService.getAll().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.results = courses;
        this.pageSlice = this.results.slice(0, 6);
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  ngOnSearch(){
    switch(this.filterOption){
      case "none": {
        this.results = this.courses;
        this.pageSlice = this.results.slice(0, 6);
        break;
      }
      case "name": {
        this.courseService.getByName(this.searchingBy, this.courses).subscribe(
          courses => {
            if (courses == null){
              this.results = []
            }
            else {
              this.results = courses;
              this.pageSlice = this.results.slice(0, 6);
            }
          })
        break;
      };
      case "coach": {
        this.courseService.getByCoach(this.searchingBy, this.courses).subscribe(
          courses => {
            if (courses == null){
              this.results = []
            }
            else {
              this.results = courses;
              this.pageSlice = this.results.slice(0, 6);
            }
          });
        break;
      };
      case "level": {
        this.courseService.getByLevel(this.searchingBy, this.courses).subscribe(
          courses => {
            if (courses == null){
              this.results = []
            }
            else {
              this.results = courses;
              this.pageSlice = this.results.slice(0, 6);
            }
          });
        break;
      };
    };
  };

  updateCoursesSlice(courses: Course[]){
    this.pageSlice = courses;
  }

  onDelete(course: Course){
    let courseIndex = this.pageSlice.indexOf(course, 0);
    if (courseIndex > -1) {
      this.pageSlice.splice(courseIndex, 1);
    }
  }
}
