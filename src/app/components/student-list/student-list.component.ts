import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  constructor(
    private studentService: StudentService
  ){}
  s_found: Student[] = [];
  founded: number = this.s_found.length;
  searchingBy: string = '';
  pageSlice: Student[] = this.s_found.slice(0, 6);

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: (students) => {
        this.s_found = students
        //this.results = artists;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  updateStudentsSlice(students: Student[]){
    this.pageSlice = students;
  }
}
