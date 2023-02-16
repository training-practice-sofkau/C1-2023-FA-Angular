import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  s_founded: Student[] = [];
  founded: number = 0;
  searchingBy: string = '';

  typeSearch: string ="";
  param: string = "";
  paramApp: string ="";
  searchStrategy: string = "";
  typeOptions: string[] = ["ID", "Name", "Age", "Email"];
  strategyOptions: string[] =["Starts with", "Contains"] ;
}
