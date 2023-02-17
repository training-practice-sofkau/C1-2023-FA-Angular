import { Component, Input } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {

    constructor(private service: StudentService){}

    @Input() searchingBy!: string;
    s_founded: Student[] = [];
    founded: number = 0;
    page: number = 1;

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(){
        this.service.getAll().subscribe({
            next: (student) => {
                this.s_founded = student;
                this.founded = this.s_founded.length;
            },
            error: (console.log),
            complete: (console.log)
        })
    }



}
