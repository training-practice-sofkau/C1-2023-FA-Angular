import { Component, OnInit } from '@angular/core';
import { EMPTY, forkJoin } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  s_founded: Student[] = [];
  founded: number = 0;
  searchingBy: string = '';
  l: number = 0;

  constructor(private service: StudentService) { }
  ngOnInit(): void {
    this.s_founded= [];
    this.founded = 0;
    this.l=0;
  }

  isNumber(numStr: string): boolean {
    return !isNaN(parseFloat(numStr)) && !isNaN(+numStr)
  }


  ngFindbyName(name: string): Student[]{
    this.service.getByName(name).subscribe(
      (students) => {
        if (students.length != 0) {
          this.s_founded = students;
          this.founded = this.s_founded.length;
        }
      },
      (Error) => {
        console.error('error caught in component' + Error);
      }
      
      );
      return this.s_founded;
  }

  ngFindbyIdNum (idNum: string): Student[]{
    this.service.getByIdNum(idNum).subscribe(
      (student) => {
        if (student != EMPTY && !this.s_founded.includes(student)) {
          this.s_founded.push(student);
          this.founded = this.s_founded.length;
        }
      },
      (Error) => {
        console.error('error caught in component');
      }
    );
    return this.s_founded;
  }


  findStudent(searchingBy: string): Student[] {
    this.isNumber(searchingBy)? this.ngFindbyIdNum(searchingBy):
    this.ngFindbyName(searchingBy);
    return this.s_founded;
  }
}
