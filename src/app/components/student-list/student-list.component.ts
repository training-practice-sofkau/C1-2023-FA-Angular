import {Component} from '@angular/core';
import {Student} from 'src/app/models/student.model';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
    s_founded: Student[] = [];
    founded: number = 0;
    searchingBy: string = '';

    fill() {
        this.s_founded = [{
            id: "2",
            name: "Sarah Vargas",
            idNum: "0987654321",
            age: 55,
            mail: "sarah.vargas@hotmail.com",
            numCourses: 0
        }];

        this.founded = 1;
    }
}
