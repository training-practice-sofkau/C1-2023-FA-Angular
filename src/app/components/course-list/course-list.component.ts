import { Component } from '@angular/core';
import { Observable, forkJoin, map, zip } from 'rxjs';
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

  /*ngFindbyName(name: string): Course[]{
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

  ngFindbyCoach (coach: string): Course[]{
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
  }*/
  ngFindByString(n: string): Course[] {
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
  }
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

  findCourse(searchingBy: string): Course[] {
    if (this.isNumber(searchingBy)) {
      return this.ngFindbyLevel(+searchingBy);
    }
    /*else {
      this.service.getBystring(searchingBy).subscribe(
        (courses) => {
          console.log(courses);
          this.c_founded = courses;
          this.founded = this.mix_founded.length;
        }
      )

    }*/


    return this.ngFindByString(searchingBy);
  }

}
