import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
})
export class StudentPageComponent implements OnInit {
  page: number = 1;
  total: number = 0;
  students: Student[] = [];
  searchParameter: string = '';

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

  deleteStudent(): void {
    if (confirm('Do you want to delete the student?')) {
      this.service.deleteStudent(this.searchParameter).subscribe({
        error: console.log,
        complete: console.log,
      });
      this.total = this.students.length;
      alert('The student was deleted');
    }
  }
}
