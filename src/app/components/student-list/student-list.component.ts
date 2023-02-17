import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  s_founded: Observable<Student[]> = new Observable<Student[]>();
  searchingBy: string = '';
  selected_option: string = '';
  p: number = 1;
  count: number = 3;

  constructor(private service: StudentService) {}

  ngSearchByParam(event: Event) {
    const element = event.target as HTMLInputElement;
    this.s_founded = this.service.filterParameterType(
      this.selected_option,
      element.value
    );
  }
}
