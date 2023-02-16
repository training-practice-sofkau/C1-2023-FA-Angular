import {Component} from '@angular/core';
import {Course} from "../../models/course.model";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {

    c_founded: Course[] = [];
    founded: number = 0;
    searchingBy: string = '';

    fill() {
        this.c_founded = [{
            id: "2",
            name: "Angular",
            coach: "Daniel",
            level: 2,
            lastUpdated: new Date("December 25, 2022"),
            studentList: []
        }];

        this.founded = 1;
    }
}
