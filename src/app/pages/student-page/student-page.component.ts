import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {
  
  p: number = 0;
  total: number = 0;
  l_students: Student[] = [];
  
  constructor(private builder: FormBuilder,
    private service: StudentService,
    private router: Router,
    private route: ActivatedRoute){}

  studentList: FormGroup = new FormGroup({});

  ngGetAll(): Student[]{
    this.service.getAll().subscribe({
      next: (student) =>{
        
        this.l_students = student;
        this.total = this.l_students.length;
         
      },
      error: (console.log),
      complete:(console.log)
    });
    return this.l_students;
  }

  ngOnInit(): void {
    
    
    this.studentList = this.builder.group(
      {
        idDTO: '',
        studentListDTO: []
      },
    );
    
    this.route.queryParams.subscribe((info) => {
      if(JSON.stringify(info) !== JSON.stringify({})){
        this.studentList.setValue({
        idDTO: JSON.parse(info['data']).idDTO,
        studentListDTO: JSON.parse(info['data']).studentListDTO,
        })
      }
    })

    if(this.studentList.controls['idDTO'].value === ''){
      this.ngGetAll();
    }
    else{
      this.l_students = this.studentList.controls['studentListDTO'].value;
      this.total = this.l_students.length;
    }

    
  }
  
  
}
