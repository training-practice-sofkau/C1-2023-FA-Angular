import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Student} from 'src/app/models/student.model';

@Component({
    selector: 'app-student-card',
    templateUrl: './student-card.component.html',
    styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
    constructor(private router: Router) {
    }

    @Input() father: string = "";

    @Input() student: Student = {
        id: '',
        name: '',
        idNum: '',
        age: 0,
        mail: '',
        courseDTO: {
            id: "",
            name: "",
            coach: "",
            level: 0,
            lastUpdated: new Date(),
            studentListDTO: []
        }
    };

    goToForm() {
        console.log(this.student);
        this.router.navigate(['students/edit'], {
            queryParams: {
                data: JSON.stringify(this.student)
            }
        });
    }


}
