import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  l_students: Student[] = [];
  p: number = 1;
  total: number = this.l_students.length;


  searchingBy: string = '';

  typeSearch: string = "";
  param: string = "";
  paramApp: string = "";
  searchStrategy: string = "";
  typeOptions: string[] = ["ID", "Name", "Age", "Email"];
  strategyOptions: string[] = ["Starts with", "Contains", "Exact match"];

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (students) => {
        this.l_students = students.data,
          console.log(students.data)
        this.total = this.l_students.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  ngOnSearch() {

    //this.l_artists = ARTISTS;
    switch (this.typeSearch) {
      case "Name": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByName(this.param, "startswith").subscribe(students => this.l_students = students.data)
        };
        if (this.searchStrategy === "Contains") {
          console.log("enters here")
          this.service.getByName(this.param, "contains").subscribe(students => this.l_students = students.data)
        };
        if (this.searchStrategy === "Exact match") {
          this.service.getByName(this.param, "exactmatch").subscribe(students => this.l_students = students.data)
        };
        break;
      }
      case "Age": {
        console.log("type search", this.typeSearch)
        console.log("param", this.param)
        console.log("search strategy", this.searchStrategy)
        this.service.getByAge(this.param).subscribe(students => this.l_students = students.data);
        break;
      }
      case "Email": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByMail(this.param, "startswith").subscribe(students => this.l_students = students.data)
        };
        if (this.searchStrategy === "Contains") {
          this.service.getByMail(this.param, "contains").subscribe(students => this.l_students = students.data)
        };
        if (this.searchStrategy === "Exact match") {
          this.service.getByMail(this.param, "exactmatch").subscribe(students => this.l_students = students.data)
        };
        break;
      }

      default: {
        this.service.getAll().subscribe(students => this.l_students = students.data);
        break;
      }
    }
    console.log(this.l_students)
    this.total = this.l_students.length;
  }
}
