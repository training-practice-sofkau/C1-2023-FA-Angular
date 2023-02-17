import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  constructor(private service: StudentService){}
  l_students: Student[] = [];
  total: number = 0;
  param: string = "";
  page = 0;




ngOnInit(): void{
  this.service.getAll().subscribe({
    next: (student) => {
      this.l_students = student,
      this.total = this.l_students.length;

    },
    error: (console.log),
    complete: (console.log)
  })


}


// ngGetByName(param)

}
