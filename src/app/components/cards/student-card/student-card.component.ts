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
    id: '',
    name: '',
    idNum: '',
    age: 0,
    mail: '',
    numCourses: 0
  }

  goToUpdateForm(){
    this.service.changeType('update');
    this.router.navigate(['students/edit'],{
      queryParams:{
        data: JSON.stringify(this.student)
      }
    });
  };

  ngDeleteById(param: string){
    let question = confirm("Do you want to delete this course?")
    if (question) {
    this.service.deleteById(param).subscribe((student) => {
      if (typeof student == 'object') {
        alert("El artista: " + student.name + " con id: " + student.id + " ha sido eliminado exitosamente")
        window.location.reload();
      } else {
        alert("El artista con id: "+ param + " no fue encontrado")
      }
    })};
  };

}
