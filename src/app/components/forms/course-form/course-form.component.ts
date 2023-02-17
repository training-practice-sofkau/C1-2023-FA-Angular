import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudentService } from 'src/app/services/student-service/student.service';
import { StudentListComponent } from '../../student-list/student-list.component';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit{

  courseForm: FormGroup = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),
  coach: new FormControl(''),
  level: new FormControl(''),
  lastUpdated: new FormControl(new Date),
  studentList: new FormControl([])
})
  students: Student[] = [];
  studentDelete: string = '';




  constructor(private builder: FormBuilder,
    private service: CourseService,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router){}





    ngOnInit(): void {



    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info)!== JSON.stringify({})){
        this.courseForm.setValue({
          id: JSON.parse(info['data']).id,
          name: JSON.parse(info['data']).name,
          coach: JSON.parse(info['data']).coach,
          level: JSON.parse(info['data']).level,
          lastUpdated: JSON.parse(info['data']).lastUpdated,
          studentList: JSON.parse(info['data']).studentListDTO
        })



      }
    })
  }

  get studentList(){
    return (this.courseForm.get('studentList'))
  }

  ngDelete(id: string){
    this.studentService.deleteStudent(id).subscribe({
      next: (data) => {},
      error: (err) =>{
        console.error('Error '+err)
      },
      complete:()=>{},
    });
    alert('Student removed');
    this.router.navigate(['/courses'])
  }

  onSubmit(){
    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        console.log(this.studentList?.getRawValue().length)
        if(this.studentList?.getRawValue().length == 0){
          this.service.putCourse(this.courseForm.value).subscribe((answer) =>
          console.log(answer));
          this.router.navigate(['/courses'])

        }

        else{
          alert('The course should not have students before being updated')


        }
    }
      else{
        this.service.postCourse(this.courseForm.value).subscribe((answer)=>
        console.log(answer));
        this.router.navigate(['/courses'])
      }
  })
}




}
