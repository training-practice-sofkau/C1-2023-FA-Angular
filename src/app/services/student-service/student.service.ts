import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/api/students"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByID(param: string): Observable<any> {
    return this.http.get(this.api+"/"+param);
  }

  post(student:Student):  Observable<any> {
    return this.http.post(this.api, student);
  }

  update(param: string, student:Student): Observable<any> {
    return this.http.put(this.api+"/"+param, student);
  }

  deleteByID(param: string):  Observable<any> {
    return this.http.delete(this.api+"/"+param);
  }

}
