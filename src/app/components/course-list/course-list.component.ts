import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

    constructor(private service: CourseService){}

    @Input() searchingBy: string = '';
    s_founded: Course[] = [];
    founded: number = 0;
    selected: string = "name";
    page: number = 1;


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

    onSearch() {
        if (this.searchingBy.trim() === ""){
            this.fetchData();
        }

        if (this.selected === 'name') {
            this.service.getCoursesByname(this.searchingBy.trim()).subscribe({
                next: (data) => {
                    this.s_founded = [data];
                    this.founded = this.s_founded.length;
                },
                error: (console.log),
                complete: (console.log)
            });
        }

        if(this.selected === "level") {
            this.service.getCoursesByLevel(parseInt(this.searchingBy)).subscribe({
                next: (data) => {
                    this.s_founded = data;
                    this.founded = this.s_founded.length;
                },
                error: (console.log),
                complete: (console.log)
            });
        }

        if(this.selected === "coach") {
            this.service.getCoursesByCoach(this.searchingBy.trim()).subscribe({
                next: (data) => {
                    this.s_founded = data;
                    this.founded = this.s_founded.length;
                },
                error: (console.log),
                complete: (console.log)
            });
        }
    }
}
