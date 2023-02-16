import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  constructor(private service: StudentService) {}

  searchBy: string = '';
  isSearch: boolean = false;
  students: Student[] = [];
  totalResults: number = 0;
  searchParams: string = '';

  onSearch() {
    if (this.searchParams != '' && this.searchBy != '') {
      this.isSearch = true;
      switch (this.searchBy) {
        case 'name':
          this.service.getByName(this.searchParams).subscribe({
            next: (students) => {
              this.students = [...students];
              this.totalResults = students.length;
            },
            error: console.log,
            complete: console.log,
          });
          break;
        case 'idNum':
          this.service.getByIdNum(this.searchParams).subscribe({
            next: (students) => {
              this.students = [...students];
              this.totalResults = students.length;
            },
            error: console.log,
            complete: console.log,
          });
          break;
        default:
          alert('Select a valid option to search');
          break;
      }
    } else {
      alert('Type something and select and option to search');
    }
  }
}
