import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentService} from "../../../services/student-service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {CourseService} from "../../../services/course-service/course.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

    constructor(
        private builder: FormBuilder,
        private courseService: CourseService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
    ) {
    }

    father: string = "";
    courseForm: FormGroup = new FormGroup({});

    ngOnInit(): void {
        this.father = this.router.url;
        this.courseForm = this.builder.group({
            id: '',
            name: '',
            coach: '',
            level: 0,
        });
        //this.studentForm.valueChanges.subscribe(console.log);

        this.route.queryParams.subscribe((info) => {
            if (JSON.stringify(info) !== JSON.stringify({})) {
                this.courseForm.setValue({
                    id: JSON.parse(info['data']).id,
                    name: JSON.parse(info['data']).name,
                    coach: JSON.parse(info['data']).coach,
                    level: JSON.parse(info['data']).level,
                });
            }
        });
    }

    backButton() {
        this.location.back();
    }

    saveNew() {
        this.courseService.saveNewCourse(this.courseForm.value).subscribe({
            next: course => console.log(course),
            error: error => console.log(error),
            complete: () => this.router.navigateByUrl('/home')
        });
    }

    updateCourse() {
        this.courseService.updateCourse(this.courseForm.value).subscribe({
            next: course => console.log(course),
            error: error => console.log(error),
            complete: () => this.router.navigateByUrl('/home')
        });
    }

}
