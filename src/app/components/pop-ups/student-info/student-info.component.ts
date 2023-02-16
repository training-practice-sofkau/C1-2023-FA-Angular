import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentCardComponent } from '../../cards/student-card/student-card.component';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data:Student) {}

  ngOnInit(): void {

  }

}
