import {
  Component,
  Input,
  KeyValueDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { RelationService } from 'src/app/services/relation-service/relation.service';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({});
  related: Course[] = [];
  notRelated: Course[] = [];

  constructor(
    private builder: FormBuilder,
    private studentService: StudentService,
    private courseService: CourseService,
    private relationService: RelationService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.studentForm = this.builder.group({
      studentId: '',
      name: '',
      idNum: '',
      age: '',
      mail: '',
    });
    this.route.queryParams.subscribe((info) => {
      if (JSON.stringify(info) !== JSON.stringify({})) {
        this.studentForm.setValue({
          studentId: JSON.parse(info['data']).studentId,
          name: JSON.parse(info['data']).name,
          idNum: JSON.parse(info['data']).idNum,
          age: JSON.parse(info['data']).age,
          mail: JSON.parse(info['data']).mail,
        });
      }
    });
    this.loadRelations();
  }

  relate(courseId: string) {
    if (this.studentForm.value.studentId === '') {
      alert('Create or edit a student to add courses');
    } else {
      this.relationService.createRelation(courseId,this.studentForm.value.studentId).subscribe({
        next: (course) => {
          if (course) {
            this.loadRelations();
            alert('Course added');
          } else {
            alert("Course hasn't been deleted");
          }
        },
        error: console.log,
        complete: console.log,
      })
      this.loadRelations();
    }
  }

  unRelate(courseId: string) {
    if (this.studentForm.value.studentId === '') {
      alert('Create or edit a student to remove courses');
    } else {
      this.relationService.removeRelation(courseId,this.studentForm.value.studentId).subscribe({
        next: (course) => {
          if (course) {
            this.loadRelations();
            alert('Course removed');
          } else {
            alert("Course hasn't been deleted");
          }
        },
        error: console.log,
        complete: console.log,
      })
      this.loadRelations();
    }
  }

  setFormValues(student: Student) {
    this.studentForm.setValue({
      studentId: student.studentId,
      name: student.name,
      idNum: student.idNum,
      age: student.age,
      mail: student.mail,
    });
  }

  loadRelations() {
    if (this.studentForm.value.studentId === '') {
      this.courseService.getAll().subscribe({
        next: (courses) => {
          this.notRelated = [...courses];
        },
        error: console.log,
        complete: console.log,
      });
    } else {
      this.relationService
        .relationsFromStudent(this.studentForm.value.studentId)
        .subscribe({
          next: (relations) => {
            this.related = [...relations[0]];
            this.notRelated = [...relations[1]];
          },
          error: console.log,
          complete: console.log,
        });
    }
  }

  onSave() {
    if (this.checkData('save')) {
      this.studentService.saveNew(this.studentForm.value).subscribe({
        next: (student) => {
          this.setFormValues(student);
        },
        error: console.log,
        complete: console.log,
      });
    }
  }
  update() {
    if (this.checkData('update')) {
      this.studentService.update(this.studentForm.value).subscribe({
        next: (student) => {
          this.setFormValues(student);
        },
        error: console.log,
        complete: console.log,
      });
    }
  }
  onCreate() {
    if (this.studentForm.value.studentId === '') {
      this.onSave();
    } else {
      this.update();
    }
  }

  checkData(action: string): boolean {
    if (
      this.studentForm.value.name === '' &&
      this.studentForm.value.coach === '' &&
      this.studentForm.value.level === '' &&
      this.studentForm.value.mail === ''
    ) {
      alert(
        'You have to fill all the information to ' + action + ' the course'
      );
      return false;
    } else if (this.studentForm.value.name === '') {
      alert('You have write a name to ' + action + ' the course');
      return false;
    } else if (
      this.studentForm.value.idNum === null ||
      this.studentForm.value.idNum === ''
    ) {
      alert('You have write an id number to ' + action + ' the course');
      return false;
    } else if (
      this.studentForm.value.age === null ||
      this.studentForm.value.age === ''
    ) {
      alert('You have write an age to ' + action + ' the course');
      return false;
    } else if (this.studentForm.value.mail === '') {
      alert('You have write a mail to ' + action + ' the course');
      return false;
    } else if (
      this.studentForm.value.name != '' &&
      this.studentForm.value.coach != '' &&
      this.studentForm.value.level != '' &&
      this.studentForm.value.mail != ''
    ) {
      alert('Student ' + action + 'd');
      return true;
    } else {
      alert(
        'You have to fill all the information to ' + action + ' the course'
      );
      return false;
    }
  }
}
