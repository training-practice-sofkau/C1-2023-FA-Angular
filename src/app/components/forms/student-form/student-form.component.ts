import {Component, Input, KeyValueDiffers, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Route, Router, RoutesRecognized} from '@angular/router';
import {Student} from 'src/app/models/student.model';
import {StudentService} from 'src/app/services/student-service/student.service';
import {Location} from "@angular/common";
import {filter, pairwise} from "rxjs";
import {Course} from "../../../models/course.model";
import {CourseService} from "../../../services/course-service/course.service";

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

    studentForm: FormGroup = new FormGroup({});

    @Input() course: string = "";
    father: string = "";

    constructor(private builder: FormBuilder,
                private service: StudentService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private courseService: CourseService
    ) {
    }

    ngOnInit(): void {
        this.father = this.router.url;
        this.studentForm = this.builder.group({
            id: '',
            name: '',
            idNum: '',
            age: 0,
            mail: '',
            courseDTO: {}
        });
        //this.studentForm.valueChanges.subscribe(console.log);

        this.route.queryParams.subscribe((info) => {
            if (JSON.stringify(info) !== JSON.stringify({})) {
                this.studentForm.setValue({
                    id: JSON.parse(info['data']).id,
                    name: JSON.parse(info['data']).name,
                    idNum: JSON.parse(info['data']).idNum,
                    age: JSON.parse(info['data']).age,
                    mail: JSON.parse(info['data']).mail,
                    courseDTO: JSON.parse(info['data']).courseDTO,
                });
                this.studentForm.get('courseDTO')?.value != null ?
                    this.course = this.studentForm.get('courseDTO')?.value.id :
                    this.course = "";
            }
        });
    }

    backButton() {
        this.location.back();
    }

    saveNew() {
        this.service.saveNewStudent(this.studentForm.value).subscribe({
            next: (answer) => console.log(answer),
            error: error => console.log(error),
            complete: () => this.router.navigateByUrl("/home")
        });
    }

    updateStudent() {

        if (this.course == "") {
            this.studentForm.patchValue({
                courseDTO: {}
            });
            this.justUpdate();

        } else {

            this.courseService.getById(this.course).subscribe({
                next: course => {
                    console.log(course);
                    this.studentForm.patchValue({
                        courseDTO: course
                    });

                },
                error: error => console.log(error),
                complete: () => {
                    console.log("Get course =v");
                    console.log(this.studentForm.value);
                    this.justUpdate();
                }
            });

        }

    }

    justUpdate() {
        this.service.updateStudent(this.studentForm.value).subscribe({
            next: (answer) => console.log(answer),
            error: error => console.log(error),
            complete: () => this.router.navigateByUrl("/home")
        });
    }

}
