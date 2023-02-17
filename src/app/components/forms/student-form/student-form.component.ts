import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student-service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit{
 
  studentForm: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private builder: FormBuilder, 
    private service: StudentService, 
    private route: ActivatedRoute){}

    newPath: boolean = false;

    ngOnInit(): void {
        this.studentForm = this.builder.group(
            {
                name: '',
                idNum: '',
                age: 0,
                mail: ''
            }
        );

        this.route.queryParams.subscribe((info) => {
            if(JSON.stringify(info) !== JSON.stringify({})){
                this.studentForm.setValue({
                    name: JSON.parse(info['data']).name,
                    idNum: JSON.parse(info['data']).idNum,
                    age: JSON.parse(info['data']).age,
                    mail: JSON.parse(info['data']).mail,
                })

            }

        })

        if(this.route.routeConfig?.path === 'new'){
           this.newPath = true; 
        }

    }

    onSubmit(){
        this.service.postStudent(this.studentForm.value).subscribe(() => this.router.navigate(['students']));
    };


    update(){
      this.route.queryParams
      .subscribe(params => {
         this.service.updateStudent(JSON.parse(params['data']).id, this.studentForm.value).subscribe(() => this.router.navigate(['students']))
      })
    };
}
