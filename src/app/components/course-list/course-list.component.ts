import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

    constructor(private service: CourseService){}

    s_founded: Course[] = [];
    founded: number = 0;
    searchingBy!: string;


    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(){
        this.service.getAll().subscribe({
            next: (course) => {
                this.s_founded = course;
                this.founded = this.s_founded.length;
            },
            error: (console.log),
            complete: (console.log)
        })
    }

}
