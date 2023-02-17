import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Student} from 'src/app/models/student.model';
import {StudentService} from "../../../services/student-service/student.service";

@Component({
    selector: 'app-student-card',
    templateUrl: './student-card.component.html',
    styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
    constructor(
        private router: Router,
        private studentService: StudentService
    ) {
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
        this.router.navigate(['students/edit'], {
            queryParams: {
                data: JSON.stringify(this.student)
            }
        });
    }

    deleteStudent() {
        this.studentService.deleteStudent(this.student.id).subscribe({
            next: () => console.log("Deleted Successfully"),
            error: error => console.log(error),
            complete: () => this.router.navigateByUrl("/home")
        });
    }

    unregisterStudent() {
        this.student = {
            id: this.student.id,
            name: this.student.name,
            idNum: this.student.idNum,
            age: this.student.age,
            mail: this.student.mail,
            courseDTO: {
                id: "",
                name: "",
                coach: "",
                level: 0,
                lastUpdated: new Date(),
                studentListDTO: []
            }
        };
        this.studentService.updateStudent(this.student).subscribe({
            next: (answer) => console.log(answer),
            error: error => console.log(error),
            complete: () => this.router.navigateByUrl("/home")
        });
    }
}
