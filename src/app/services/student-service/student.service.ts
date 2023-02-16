import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

 constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/students"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  postStudent(student: Student){
    return this.http.post(this.api, student)
  }
  
  deleteStudent(id: number){
      return this.http.delete(`${this.api}/${id}`, { responseType: 'text' })
  }


}
