import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../models/course.model";
import {Router} from "@angular/router";
import {Student} from "../../../models/student.model";
import {StudentService} from "../../../services/student-service/student.service";
import {CourseService} from "../../../services/course-service/course.service";

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit{

    constructor(
        private router: Router,
        private studentService: StudentService,
        private courseService: CourseService
    ) {
    }

    students: Student[] = [];
    public pageName: string = "coursePage";

    ngOnInit() {
        this.course.studentListDTO.forEach( s => {
            this.studentService.getByIdNum(s.idNum).subscribe({
                next: student => this.students.push(student),
                error: error => console.log(error),
                complete: (console.log)
            });
        })
    }

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

    deleteCourse(){
        this.courseService.deleteCourse(this.course.id);
    }

}
