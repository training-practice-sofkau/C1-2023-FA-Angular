import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentFormComponent } from '../../forms/student-form/student-form.component';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  constructor(private router: Router, private service: StudentService) { }
  @Input() student: Student = {
    idDTO: '',
    nameDTO: '',
    idNumDTO: '',
    ageDTO: 0,
    mailDTO: '',
    //numCoursesDTO: 0
  }

  goToForm() {
    this.router.navigate(['students/edit'], {
      queryParams: {
        data: JSON.stringify(this.student)
      }
    })
  }

  ngdeleteById(studentID: string, studentName: string) {
    if (confirm(`do you really like delete ${studentName} from the list?`)) {
      this.service.deleteStudent(studentID).subscribe();
      alert(`${studentName} was deleted successfully`);
      //this.router.navigate(["/students"]);
      window.location.reload();
    } else {
      this.router.navigate(["/students"]);
    }
  }
}


