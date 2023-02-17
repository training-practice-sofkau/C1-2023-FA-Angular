import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  constructor(private service: StudentService){}
  s_found: Student[] = [];
  s_foundID: any;
  found: number = 0;
  searchingBy: string = '';
  param: string = '';


ngSearch(){
  console.log(this.searchingBy)
  if(this.searchingBy == 'idnum'){
    this.service.getByIdNum(this.param).subscribe({
      next: (student) => {
        this.s_foundID = student,
        this.found = 1
        console.log(this.found)

      }
    })

  }
  else {
    this.service.getByName(this.param).subscribe({
      next: (student) => {
        this.s_found = student,
        this.found = student.length

      }
    })
  }
}

}
