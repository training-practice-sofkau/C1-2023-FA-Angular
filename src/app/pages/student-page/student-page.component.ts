import {Component, OnInit} from '@angular/core';
import {Student} from 'src/app/models/student.model';
import {StudentService} from "../../services/student-service/student.service";

@Component({
    selector: 'app-student-page',
    templateUrl: './student-page.component.html',
    styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit{

    constructor(private studentService: StudentService) {
    }

    public pageName: string = "studentPage";

    l_students: Student[] = [];

    total: number = this.l_students.length;

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        return this.studentService.getAll().subscribe({
            next: students => {
                this.l_students = students;
                this.total = this.l_students.length;
            },
            error: error => console.log(error),
            complete: (console.log)
        })
    }


}
