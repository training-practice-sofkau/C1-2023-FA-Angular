import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { envDev } from 'src/environment/envDev';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  api:string = envDev.url+"students"

  constructor(private http: HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.api)
  }

  updateStudent(student:Student):Observable<any>{
    return this.http.put(this.api,student)
  }

  saveStudent(student:Student):Observable<any>{
    return this.http.post(this.api,student)
  }

  deleteStudent(id:string):Observable<any>{
    return this.http.delete(this.api+`/delete?studentId=${id}`,{responseType: 'text'})
  }


}
