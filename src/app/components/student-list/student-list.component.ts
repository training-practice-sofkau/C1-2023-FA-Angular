import { Component, Input } from '@angular/core';
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
  students: Student[] = [];
  results: Student[] = [];
  pageSlice: Student[] = [];

  @Input() searchingBy: string = '';
  filterOption: string = "";

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: (students) => {
        this.students = students;
        this.results = students;
        this.pageSlice = this.results.slice(0, 6);
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  ngOnSearch(){
    switch(this.filterOption){
      case "none": {
        this.results = this.students;
        this.pageSlice = this.results.slice(0, 6);
        break;
      }
      case "name": {
        this.studentService.getByName(this.searchingBy).subscribe(
          students => {
            if (students == null){
              this.results = []
            }
            else {
              this.results = students;
              this.pageSlice = this.results.slice(0, 6);
            }
          })
        break;
      };
      case "dni": {
        this.studentService.getByDni(this.searchingBy).subscribe(
          students => {
            console.log(students)
            this.results = students;
            this.pageSlice = this.results.slice(0, 6)
          },
          error => {
            console.log("Error found: " + error)
            this.results = [];
          }
          );
        break;
      };
    };
  };

  updateStudentsSlice(students: Student[]){
    this.pageSlice = students;
  }

  onDelete(student: Student){
    let studentIndex = this.pageSlice.indexOf(student, 0);
    if (studentIndex > -1) {
      this.pageSlice.splice(studentIndex, 1);
    }
  }
}
