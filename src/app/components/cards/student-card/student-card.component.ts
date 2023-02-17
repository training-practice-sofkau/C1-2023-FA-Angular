import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';


@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent {

  @Input() student: Student = {
    id: '',
    name: '',
    idNum: '',
    age: 0,
    mail: '',
    course: {
      id: '',
      name: '',
      coach: '',
      level: 0,
      lastUpdated: new Date(),
    },
  };

  constructor(
    private router: Router,
    private studentService: StudentService
  ) {}

  delete() {
    if (confirm(`Are you sure to delete ${this.student.name}?`)) {
      this.studentService.deleteStudent(this.student.idNum).subscribe({
        next: (data) => {},
        error: (err) => {
          console.error('Error on delete student:' + err);
        },
        complete: () => {},
      });
      alert('Student deleted successfully');
      location.reload();
      return;
    }
  }

  goToForm() {
    this.router.navigate(['students/edit'], {
      queryParams: {
        data: JSON.stringify(this.student.id),
      },
    });
  }
}
