import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentCardComponent } from '../student-card/student-card.component';
import { StudentInfoComponent } from '../../pop-ups/student-info/student-info.component';
import { StudentService } from 'src/app/services/student-service/student.service';
import { AvailableStudentsComponent } from '../../pop-ups/available-students/available-students.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {

  constructor(private router: Router,
    private service: CourseService,
    private serviceStudent: StudentService,
    private dialog: MatDialog) { }

  showStudents: boolean = false;

  @Input() course: Course = {
    courseId: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    studentList: []
  }

  onDelete(): void {
    if (this.course.studentList) {
      if (this.course.studentList.length > 0) {
        alert('Please remove the students of the course')
      }
      else {
        if (confirm(`Do you want to delete the course with ID: ${this.course?.courseId}?`)) {
          if (this.course) {
            this.service.deleteByID(<string>this.course?.courseId).subscribe((answer) => {
              //Fix the server response
              console.log(answer)
              alert(`Course with ID: ${this.course?.courseId} has been deleted!`)
            })
          }
        }
      }
    }
  }


  goToForm(): void {
    this.router.navigate(['courses/edit'], {
      queryParams: {
        data: JSON.stringify(this.course)
      }

    })
  }

  onShowStudents(): void {
    this.showStudents = !this.showStudents;
  }

  openDialog(student: Student) {
    const dialogRef = this.dialog.open(StudentInfoComponent, { data: student });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAllStudentsDialog() {
    const dialogRef = this.dialog.open(AvailableStudentsComponent, { data: this.course });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onUnregisterStudent(student: Student): void {
    this.serviceStudent.update(<string>student.studentId, student
    ).subscribe((answer) => {
      console.log(answer)
      alert(`Student with ID: ${answer.data.studentId} has been updated!`)
    })
  }
}
