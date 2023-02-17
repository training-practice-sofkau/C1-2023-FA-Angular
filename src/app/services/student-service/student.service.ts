import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8090/students"

  getAll(): Observable<any>{
    return this.http.get(this.api);
  }

  getByName(name: string): Observable<any>{
    return this.http.get(this.api+"/name/"+name)
  }

  getByIdNum(idNum: string): Observable<any>{
    return this.http.get(this.api+"/idnum/"+idNum)
  }

  postStudent(student: Student){
    return this.http.post(this.api,student)
  }

  putStudent(student: Student){
    return this.http.put(this.api,student)
  }

  deleteStudent(id: string){
    return this.http.delete(this.api+"/"+id)
  }
}
