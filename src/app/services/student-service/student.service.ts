import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  url: string = "http://localhost:8080/api/v1/sofka_catalog/student/"

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  getStudentById(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}${id}`);
  }


  editStudent(id: string, form: any): Observable<any> {
    return this.httpClient.put(`${this.url}edit`, {
      id: id,
      name: form.name,
      idNum: form.idNum,
      age: form.age,
      mail: form.mail,
      course: form.course
    });
  }

  saveStudent(form: any): Observable<any>{
    return this.httpClient.post(this.url, form);
  }

  deleteStudent(idNum: string): Observable<any> {
    return this.httpClient.delete(`${this.url}delete/${idNum}`);
  }
}
