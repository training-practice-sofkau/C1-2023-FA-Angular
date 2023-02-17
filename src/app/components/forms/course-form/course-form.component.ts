import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Student } from 'src/app/models/student.model';
import { Course } from 'src/app/models/course.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  courseForm: FormGroup = new FormGroup({});
  input = new FormControl('', [Validators.required]);
  student_selected: string = '';
  addStudentStatus: boolean = false;
  student_to_add: string = '';

  constructor(private builder: FormBuilder,
    private service: CourseService,
    private route: ActivatedRoute,
    private studentService: StudentService){}

    type: string = '';
    studentListDTO: Student[] = []
    allStudents: Course[] = [];

  ngOnInit(): void {
    this.type = this.service.getType();
    this.courseForm = this.builder.group(
      {
        id: '',
        name: '',
        coach: '',
        level: 0,
        studentListDTO: []
      });

    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.courseForm.setValue({
          id: JSON.parse(info['data']).id,
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
          studentListDTO: JSON.parse(info['data']).studentListDTO,
         })
        this.studentListDTO = JSON.parse(info['data']).studentListDTO;
      }
    })
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  onSubmit(){
    this.service.postCourse(this.courseForm.value).subscribe(
      (answer) => console.log(answer)
      );
  };

  onUpdate() {
    this.service.updateCourse(this.courseForm.value);
  }

  removeStudent(){
    let idCourse = this.courseForm.get('id')?.value.toString()
    if (this.student_selected !== ''){
      console.log(idCourse, this.student_selected)
    this.service.removeStudentFromCourse(idCourse, this.student_selected)
    } else {

    }
  }

  toogleButton(){
    this.addStudentStatus = !this.addStudentStatus;
    this.studentService.getAll().subscribe({
      next: (student) => {
        this.allStudents = student
      },
      error: (console.log),
      complete: (console.log)
    });
  };

  addStudent(){
    let idCourse = this.courseForm.get('id')?.value.toString()
  if (this.student_to_add !== ''){
    console.log(idCourse, this.student_to_add)
  this.service.addStudentToCourse(idCourse, this.student_to_add)
  } else {}
  }

}
