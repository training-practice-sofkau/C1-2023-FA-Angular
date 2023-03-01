import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  page: number = 1;
  total: number = 0;
  typeSearch: string = '';
  searchingBy: string = '';
  students: Student[] = [];
  typeSearchList: string[] = ['Name', 'Identification Number'];

  constructor(private service: StudentService) {}

  ngOnInit(): void {
    this.service.getAllStudents().subscribe({
      next: (student) => {
        (this.students = student), (this.total = this.students.length);
      },
      error: console.log,
      complete: console.log,
    });
  }

  onSearch(): void {
    if (this.searchingBy != '') {
      switch (this.typeSearch) {
        case 'Name': {
          this.getByName();
          break;
        }

        case 'Identification Number': {
          this.getByIdentificationNumber();
          break;
        }

        default: {
          this.getAllStudents();
        }
      }
    } else {
      this.getAllStudents();
    }
  }

  getAllStudents(): void {
    this.service.getAllStudents().subscribe({
      next: (student) => {
        (this.students = student), (this.total = this.students.length);
      },
      error: console.log,
      complete: console.log,
    });
  }

  getByIdentificationNumber(): void {
    if (this.searchingBy) {
      this.service.getByIdentificationNumber(this.searchingBy).subscribe({
        next: (student) => {
          this.students = [student];
          this.total = this.students.length;
        },
        error: console.log,
        complete: console.log,
      });
    } else {
      alert('Please, enter an identification number');
    }
  }

  getByName(): void {
    if (this.searchingBy) {
      this.service.getByName(this.searchingBy).subscribe({
        next: (student) => {
          this.students = student;
          this.total = this.students.length;
        },
        error: console.log,
        complete: console.log,
      });
    } else {
      alert('Please, enter a name');
    }
  }
}
