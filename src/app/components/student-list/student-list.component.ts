import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentPageComponent } from 'src/app/pages/student-page/student-page.component'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  student: StudentPageComponent = new StudentPageComponent();
  s_found: Student[] = this.student.l_students;
  founded: number = this.s_found.length;
  searchingBy: string = '';
  pageSlice: Student[] = this.s_found.slice(0, 6);

  updateStudentsSlice(students: Student[]){
    this.pageSlice = students;
  }
}
