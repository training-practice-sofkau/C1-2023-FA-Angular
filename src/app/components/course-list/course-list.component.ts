import { Component } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  c_founded: Course[] = [];
  selected: string = 'name';
  founded: number = 0;
  searchingBy: string = '';

  constructor(private courseServie: CourseService) {}

  ngOnSearch() {
    if (this.searchingBy.trim() === ""){
      this.c_founded = [];
      this.founded = this.c_founded.length;
      return;
    }
    if (this.selected === 'level') {
      this.courseServie.getCoursesByLevel(Number(this.searchingBy)).subscribe({
        next: (data) => {
          this.c_founded = data.data;
          this.founded = this.c_founded.length;
        },
        error: (err) => console.error('Error getting courses by level:' + err),
        complete: () => {},
      });
      return;
    }
    if(this.selected === "name") {
      this.courseServie.getCoursesByName(this.searchingBy.trim()).subscribe({
        next: (data) => {
          this.c_founded = data.data;
          this.founded = this.c_founded.length;
        },
        error: (err) => console.error('Error getting courses by name:' + err),
        complete: () => {},
      });
      return;
    }
    if(this.selected === "coach") {
      this.courseServie.getCoursesByCoach(this.searchingBy.trim()).subscribe({
        next: (data) => {
          this.c_founded = data.data;
          this.founded = this.c_founded.length;
        },
        error: (err) => console.error('Error getting courses by coach:' + err),
        complete: () => {},
      });
      return;
    }
    

  }
}
