import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.scss']
})
export class ShowCoursesComponent implements OnChanges {

  @Input() myCourses:Course[] = [];
  @Output() idCourse = new EventEmitter<string>()
  @Output() editCourse= new EventEmitter<Course>()

  total:number = 0;

  pagination_courses:Course[] = []

  currentPage: number = 1;

  rows: number = 9;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.myCourses=changes['myCourses'].currentValue;
    this.updateStateData()
  }

  ngOnInit(): void {
    this.total=this.myCourses.length
  }


  deleteCourse(id:string){
    this.idCourse.emit(id)
  }

  updateCourse(course:Course){
    this.editCourse.emit(course)
  }

  paginationList(): Course[] {
    let start = this.rows * (this.currentPage - 1);
    let end = start + this.rows;
    return this.myCourses.slice(start, end);
  }

  changePage(move: string) {
    if (move == 'up') {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    this.pagination_courses= this.paginationList();
  }

  updateStateData(){
    this.total=this.myCourses.length
    this.pagination_courses=this.paginationList()
  }

}
