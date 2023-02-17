import {Component} from '@angular/core';
import {Student} from 'src/app/models/student.model';
import {StudentService} from "../../services/student-service/student.service";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {

    constructor(private studentService: StudentService) {
    }

    s_founded: Student = {
        id: "",
        name: "",
        idNum: "",
        age: 0,
        mail: "",
    };
    founded: number = 0;
    searchingBy: string = '';

    typeOf: string = '';

    search(searchingBy: string, typeOf: string) {
        this.s_founded = {
            id: "",
            name: "",
            idNum: "",
            age: 0,
            mail: "",
        };
        this.founded = 0;
        if (typeOf == "name") {
            return this.studentService.getByName(searchingBy).subscribe({
                next: student => {
                    this.s_founded = student;
                    this.founded = 1;
                },
                error: error => console.log(error),
                complete: (console.log)
            });
        } else if (typeOf == "idnum") {
            return this.studentService.getByIdNum(searchingBy).subscribe({
                next: student => {
                    this.s_founded = student;
                    this.founded = 1;
                },
                error: error => console.log(error),
                complete: (console.log)
            });
        }
        return this.founded = 0;

    }
}
