import { Component, Input } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
    constructor(private service: StudentService){}

    @Input() param: string = "";

    l_students: Student[] = [];
    total: number = 0;
    page: number = 1;
  
    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(){
        this.service.getAll().subscribe({
            next: (student) => {
                this.l_students = student;
                    this.total = this.l_students.length;
            },
            error: (console.log),
            complete: (console.log)
        })
    }


}
