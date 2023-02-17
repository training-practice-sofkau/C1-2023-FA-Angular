import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';
import { StudentFormComponent } from '../../forms/student-form/student-form.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['../course-card/course-card.component.scss'],
})
export class StudentCardComponent {
  constructor(private router: Router, private studentService: StudentService) {}
  @Output() reload: EventEmitter<any> = new EventEmitter();
  @Input() student: Student = {
    studentId: 'n/a',
    name: 'n/a',
    idNum: 'n/a',
    age: 0,
    mail: 'n/a',
    numCourses: 0,
    courseListDTO: [],
  };

  goToForm() {
    this.router.navigate(['students/edit'], {
      queryParams: {
        data: JSON.stringify(this.student),
      },
    });
  }
  onDelete() {
    if (confirm('Course ' + this.student.name + ' Will be deleted')) {
      this.studentService.delete(this.student.studentId).subscribe({
        next: (student) => {
          if (student) {
            alert('Student deleted');
            this.reload.emit('Student deleted');
          } else {
            alert("Student hasn't been deleted");
            this.reload.emit("Student hasn't been deleted");
          }
        },
        error: console.log,
        complete: console.log,
      });
    }
  }
}
