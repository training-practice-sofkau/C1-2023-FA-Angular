import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  constructor(private router: Router,
    private service: CourseService) { }

  @Input() course: Course = {
    idDTO: '',
    nameDTO: '',
    coachDTO: '',
    levelDTO: 0,
    lastUpdatedDTO: new Date(0),
    studentListDTO: []
  }

  goToForm(){
    this.router.navigate(['courses/edit'],{
      queryParams:{
        data: JSON.stringify(this.course)

      }
      
    })
  }

  goToStudentList(){
    this.router.navigate(['students/course'],{
      queryParams:{
        data: JSON.stringify(this.course)
      }
      
    })
  }

  ngdeleteById(courseId: string, courseName: string) {
    if (confirm(`do you really like delete ${courseName} from the list?`)) {
      this.service.deleteCourse(courseId).subscribe();
      alert(`${courseName} was deleted successfully`);
      //this.router.navigate(["/students"]);
      window.location.reload();
    } else {
      this.router.navigate(["/courses"]);
    }
  }
}
