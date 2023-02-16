import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';
import { StudentFormComponent } from '../../forms/student-form/student-form.component';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent {
  constructor(private router: Router, private service: StudentService) {}
  @Input() student: Student = {
    studentId: '',
    name: '',
    idNumber: '',
    age: 0,
    mail: '',
  };

  goToForm() {
    this.router.navigate(['students/edit'], {
      queryParams: {
        data: JSON.stringify(this.student),
      },
    });
  }

  deleteStudent() {
    if (confirm('Are you sure to delete the student?')) {
      this.service.deleteStudent(this.student.studentId).subscribe({
        error: console.log,
        complete: console.log,
      });
      alert('The student was deleted');
      window.location.reload();
    }
  }
}
