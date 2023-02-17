import {Component, Input} from '@angular/core';
import {Course} from "../../models/course.model";
import {CourseService} from "../../services/course-service/course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

    c_founded: Course[] = [];
    founded: number = 0;

    constructor(private courseService: CourseService) {
    }

    @Input() searchingBy: string = '';
    typeOf: string = '';

    search(searchingBy: string, typeOf: string) {
        this.c_founded = [];
        this.founded = 0;
        console.log(searchingBy);
        console.log(typeOf);
        if (typeOf === "name") {
            return this.courseService.getByName(searchingBy).subscribe({
                next: students => {
                    this.c_founded.push(students);
                    this.founded = 1;
                    console.log(this.c_founded);
                },
                error: error => console.log(error),
                complete: (console.log)
            });
        } else if (typeOf === "coach") {
            return this.courseService.getByCoach(searchingBy).subscribe({
                next: students => {
                    this.c_founded = students;
                    this.founded = 1;
                    console.log(this.c_founded);
                },
                error: error => console.log(error),
                complete: (console.log)
            });
        } else if (typeOf === "level") {
            return this.courseService.getByLevel(Number(searchingBy)).subscribe({
                next: students => {
                    this.c_founded = students;
                    this.founded = 1;
                    console.log(this.c_founded);
                },
                error: error => console.log(error),
                complete: (console.log)
            });
        }
        return this.founded = 0;
    }
}
