import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';
import { filterStudent } from 'src/app/utils/dataForHtml';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent {

  dataSelector: string[] = filterStudent;
  studentSearch: Student[] = [];

  constructor(private studentService: StudentService) {}

  searchBy(search: any) {
    switch (search?.myFilter) {
      case 'name':
        this.getByNameFilter(search?.paramSearch);
        break;
      case 'identification':
        this.getByIdNumFilter(search?.paramSearch)
        break;
      default:
        console.log('filter invalid');
    }
  }

  getByNameFilter(name: string) {
    this.studentService.getStudentsByName(name).subscribe({
      next: (res) => {this.studentSearch = res
      this.studentSearch.sort((a,b) => a.name>b.name ? 1 : -1)},
      error: console.log,
      complete: console.log,
    });
  }

  getByIdNumFilter(name:string){
    this.studentService.getStudentsByIdNum(name).subscribe({
      next: (res) => {this.studentSearch = res
        this.studentSearch.sort((a,b) => a.name>b.name ? 1 : -1)},
      error: console.log,
      complete: console.log,
    });
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        alert(res);
      },
      error: console.log,
    });
  }

  updateStudent(editStudent: Student) {
    this.studentService.updateStudent(editStudent).subscribe({
      next: (res) => {
        alert('Student updated');
      },
      error: console.log,
    });
  }

}
