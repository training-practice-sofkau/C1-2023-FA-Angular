import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  l_courses: Course[] = [];
  total: number = this.l_courses.length;
  searchingBy: string = '';
  p: number = 1;

  typeSearch: string ="";
  param: string = "";
  paramApp: string ="";
  searchStrategy: string = "";
  typeOptions: string[] = ["Name", "Coach", "Level"];
  strategyOptions: string[] =["Starts with", "Contains", "Exact match"] ;

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (courses) => {
        this.l_courses = courses.data,
          console.log(courses.data)
        this.total = this.l_courses.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  ngOnSearch() {

    //this.l_artists = ARTISTS;
    switch (this.typeSearch) {
      case "Name": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByName(this.param, "startswith").subscribe(courses => this.l_courses = courses.data)
        };
        if (this.searchStrategy === "Contains") {
          console.log("enters here")
          this.service.getByName(this.param, "contains").subscribe(courses => this.l_courses = courses.data)
        };
        if (this.searchStrategy === "Exact match") {
          this.service.getByName(this.param, "exactmatch").subscribe(courses => this.l_courses = courses.data)
        };
        break;
      }
      case "Level": {
        console.log("type search", this.typeSearch)
        console.log("param", this.param)
        console.log("search strategy", this.searchStrategy)
        this.service.getByLevel(this.param).subscribe(courses => this.l_courses = courses.data);
        break;
      }
      case "Coach": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByCoach(this.param, "startswith").subscribe(courses => this.l_courses = courses.data)
        };
        if (this.searchStrategy === "Contains") {
          this.service.getByCoach(this.param, "contains").subscribe(courses => this.l_courses = courses.data)
        };
        if (this.searchStrategy === "Exact match") {
          this.service.getByCoach(this.param, "exactmatch").subscribe(courses => this.l_courses = courses.data)
        };
        break;
      }

      default: {
        this.service.getAll().subscribe(courses => this.l_courses = courses.data);
        break;
      }
    }

    this.total = this.l_courses.length;
  }
}
