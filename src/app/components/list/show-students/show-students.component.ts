import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.scss']
})
export class ShowStudentsComponent {

  constructor() {}

  @Input() l_students: Student[] = [];
  @Output() idStudent = new EventEmitter<string>();
  @Output() editStudent = new EventEmitter<Student>();

  total:number=0;

  pagination_students:Student[] = []

  currentPage: number = 1;

  rows: number = 9;

  ngOnInit(): void {
    this.total=this.l_students.length
    this.pagination_students=this.paginationList()
  }


  deleteStudent(id:string){
    this.idStudent.emit(id)
  }

  updateStudent(std:Student){
    this.editStudent.emit(std)
  }

  paginationList(): Student[] {
    let start = this.rows * (this.currentPage - 1);
    let end = start + this.rows;
    return this.l_students.slice(start, end);
  }

  changePage(move: string) {
    if (move == 'up') {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    this.pagination_students= this.paginationList();
  }

}
