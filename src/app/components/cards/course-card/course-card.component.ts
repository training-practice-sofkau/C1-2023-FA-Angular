import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {



  constructor(private router: Router, private service: CourseService) { }
  @Input() course: Course = {
    id: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    studentListDTO: []
  }

  goToUpdateForm(){
    this.service.changeType('update');
    this.router.navigate(['courses/edit'],{
      queryParams:{
        data: JSON.stringify(this.course)
      }
    })
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
    })}
  };

}
