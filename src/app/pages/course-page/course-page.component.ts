import {Component, OnInit} from '@angular/core';
import {Course} from "../../models/course.model";
import {formatDate, getLocaleDateFormat} from "@angular/common";
import {CourseService} from "../../services/course-service/course.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
    selector: 'app-course-page',
    templateUrl: './course-page.component.html',
    styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

    constructor(private courseService: CourseService) {
    }

    l_courses: Course[] = [];
    total: number = this.l_courses.length;

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        return this.courseService.getAll().subscribe({
            next: (courses) => {
                this.l_courses = courses;
                this.total = this.l_courses.length;
            },
            error: (error) => console.log(error),
            complete: (console.log)
        });
    }
}
