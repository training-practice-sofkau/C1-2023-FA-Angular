import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  showStudents: boolean = false;
  addStudent: boolean = false;
  unSubscribedStudents: Student[] = [];

  @Input() course: Course = {
    courseId: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
    students: [],
  };
  constructor(
    private router: Router,
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentService.getAllUnsubscribedStudents().subscribe({
      next: (student) => {
        this.unSubscribedStudents = student;
      },
      error: console.log,
      complete: console.log,
    });
  }

  goToForm() {
    this.router.navigate(['courses/edit'], {
      queryParams: {
        data: JSON.stringify(this.course),
      },
    });
  }

  deleteCourse() {
    if (confirm('Are you sure to delete the course?')) {
      this.course.students.forEach((student) =>
        this.studentService.putStudent(student).subscribe({
          error: console.log,
          complete: console.log,
        })
      );

      this.courseService.deleteCourse(this.course.courseId).subscribe({
        error: console.log,
        complete: console.log,
      });
      alert('The course was deleted');
      window.location.reload();
    }
  }

  showStudentsButton() {
    this.showStudents = !this.showStudents;
  }

  addStudentButton() {
    this.addStudent = !this.addStudent;
  }

  unsubscribeStudent(student: Student) {
    if (confirm('Are you sure to unsubscribe the student?')) {
      this.studentService.putStudent(student).subscribe({
        error: console.log,
        complete: console.log,
      });
      alert('The student was unsubscribed');
      window.location.reload();
    }
  }

  subscribeStudent(student: Student, courseId: string) {
    student['course'] = {
      courseId: courseId,
      name: '',
      coach: '',
      level: 0,
      lastUpdated: new Date(),
      students: [],
    };
    if (confirm('Are you sure to subscribe the student?')) {
      this.studentService.putStudent(student).subscribe({
        error: console.log,
        complete: console.log,
      });
      alert('The student was subscribed');
      window.location.reload();
    }
  }
}
