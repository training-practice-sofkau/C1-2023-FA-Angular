import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['../course-list/course-list.component.scss'],
})
export class StudentListComponent {
  constructor(private service: StudentService) {}

  searchBy: string = '';
  isSearch: boolean = false;
  students: Student[] = [];
  totalResults: number = 0;
  searchParams: string = '';
  totalPages: number = 1;
  currentPage: number = 1;

  calculatePages() {
    this.totalPages =
      this.totalResults % 3 > 0
        ? (this.totalResults - (this.totalResults % 3)) / 3 + 1
        : this.totalResults / 3;
  }
  passPage(index: number) {
    this.currentPage = index;
  }

  onSearch() {
    if (this.searchParams != '' && this.searchBy != '') {
      this.isSearch = true;
      switch (this.searchBy) {
        case 'name':
          this.service.getByName(this.searchParams).subscribe({
            next: (students) => {
              this.students = [...students];
              this.totalResults = students.length;
              this.calculatePages();
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
              this.calculatePages();
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
