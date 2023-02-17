import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course = {
    id: '',
    name: '',
    coach: '',
    level: 0,
    lastUpdated: new Date(),
  };
  l_students: Student[] = [];
  l_id: string[] = [];
  isStudent: boolean = false;
  studentsInCourse: any = [];

  constructor(
    private router: Router,
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: (data) => {
        this.l_students = data.data;
        this.l_students.forEach((s) => this.l_id.push(s.course.id));
      },
      error: (err) => console.error('Error on geeting students:' + err),
      complete: () => {},
    });
  }

  delete() {
    if (this.l_id.includes(this.course.id)) {
      alert('Course has stutents enrolled, remove students first');
      return;
    }

    if (confirm(`Are you sure to delete te course ${this.course.name}?`)) {
      this.courseService.deleteCourse(this.course.id).subscribe({
        next: (data) => {},
        error: (err) => {
          console.error('Error on delete course:' + err);
        },
        complete: () => {},
      });
      alert('Course deleted successfully');
      location.reload();
      return;
    }
  }

  goToForm() {
    this.router.navigate(['courses/edit'], {
      queryParams: {
        data: JSON.stringify(this.course.id),
      },
    });
  }
}
