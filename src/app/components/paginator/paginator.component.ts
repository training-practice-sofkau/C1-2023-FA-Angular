import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { Course } from 'src/app/models/course.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

@Input() students: Student[] = [];
@Output() studentSliceUpdated = new EventEmitter<Student[]>()

@Input() courses: Course[] = [];
@Output() courseSliceUpdated = new EventEmitter<Course[]>()

studentSlice = this.students.slice(0,6);
courseSlice = this.courses.slice(0,6);



OnPageChange(event: PageEvent){
  const startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;

  if (this.students.length == 0){
    if (endIndex > this.courses.length){
      endIndex = this.courses.length;
    }
    this.courseSlice = this.courses.slice(startIndex, endIndex);
    this.courseSliceUpdated.emit(this.courseSlice)
  }
  else {
    if (endIndex > this.students.length){
      endIndex = this.students.length;
    }
    this.studentSlice = this.students.slice(startIndex, endIndex);
    this.studentSliceUpdated.emit(this.studentSlice)
  };

  }
}
