import {Component, Input} from '@angular/core';
import {Course} from "../../../models/course.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

    constructor(private router: Router) {
    }

    public pageName: string = "coursePage";

    @Input() course: Course = {
        id: "",
        name: "",
        coach: "",
        level: 0,
        lastUpdated: new Date(),
        studentListDTO: []
    };

    goToForm() {
        this.router.navigate(['courses/edit'], {
            queryParams: {
                data: JSON.stringify(this.course)
            }
        });
    }

}
