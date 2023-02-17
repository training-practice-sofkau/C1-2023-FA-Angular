import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from '../../services/student-service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  
  s_founded: Student[] = [];
  selected: string = "name";
  founded: number = 0;
  searchingBy: string = '';

  constructor(private studentService: StudentService){}

  ngOnSearch() {
    if (this.searchingBy.trim() === ""){
      this.s_founded = [];
      this.founded = this.s_founded.length;
      return;
    }
    if (this.selected === 'n_ident') {
      this.studentService.getStudentByIdNum(this.searchingBy).subscribe({
        next: (data) => {
          this.s_founded = [data.data];
          this.founded = this.s_founded.length;
        },
        error: (err) => console.error('Error getting student by ID number :' + err),
        complete: () => {},
      });
      return;
    }
    if(this.selected === "name") {
      this.studentService.getStudentsByName(this.searchingBy.trim()).subscribe({
        next: (data) => {
          this.s_founded = data.data;
          this.founded = this.s_founded.length;
        },
        error: (err) => console.error('Error getting students by name:' + err),
        complete: () => {},
      });
      return;
    }
  }
}