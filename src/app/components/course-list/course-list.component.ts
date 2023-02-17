import { Component, Input } from '@angular/core';
import { EMPTY, Observable, forkJoin, map, zip } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  c_founded: Course[] = [];
  mix_founded: Course[] = [];
  founded: number = 0;
  searchingBy: string = '';
  p: number = 0;
  @Input() typeSearch: string = "";

  constructor(private service: CourseService) { }
  ngOnInit(): void {
    this.c_founded = [];
    this.mix_founded = [];
    this.founded = 0;
    this.p = 0;
  }

  isNumber(numStr: string): boolean {
    return !isNaN(parseFloat(numStr)) && !isNaN(+numStr)
  }

  ngFindbyName(name: string): Course[] {
    this.service.getByName(name).subscribe(
      (courses) => {
        if (courses.length != 0) {
          this.c_founded = courses;
          this.founded = this.c_founded.length;
        }
      },
      (Error) => {
        console.error('error caught in component' + Error);
      }

    );
    return this.c_founded;
  }

  ngFindbyCoach(coach: string): Course[] {
    this.service.getByCoach(coach).subscribe(
      (courses) => {
        if (courses.length != 0) {
          this.c_founded = courses;
          this.founded = this.c_founded.length;
        }
      },
      (Error) => {
        console.error('error caught in component' + Error);
      }

    );
    return this.c_founded;
  }

  //Actually works
  /*ngFindByString(n: string): Course[] {
    this.service.getBystring(n).subscribe(
      (courses) => {
        console.log(courses);
        this.c_founded = courses;
        this.founded = this.c_founded.length;
      }
      ,
      (Error) => {
        console.error('error caught in component' + Error);
      }
    );
    return this.c_founded;
  }*/


  ngFindbyLevel(level: number): Course[] {
    this.service.getByLevel(level).subscribe(
      (courses) => {
        if (courses.length != 0) {
          this.c_founded = courses;
          this.founded = this.c_founded.length;
        }
      },
      (Error) => {
        console.error('error caught in component' + Error);
      }

    );
    return this.c_founded;
  }

  findCourse(searchingBy: string, typeSearch: string): void {
    if (searchingBy == "" || typeSearch === "Select an option") this.ngOnInit();
    switch (typeSearch) {
      case "name":
        this.ngFindbyName(searchingBy);
        break;
      case "coach":
        this.ngFindbyCoach(searchingBy);
        break;
      case "level":
        this.ngFindbyLevel(+searchingBy);
        break
    }
  }

}
