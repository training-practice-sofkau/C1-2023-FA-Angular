import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private api: string = 'http://localhost:8080/sofkau/students/';

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }
  getByName(param: string): Observable<any> {
    return this.http.get(`${this.api}name/${param}`);
  }
  getByIdNum(param: string): Observable<any> {
    return this.http.get(`${this.api}idnum/${param}`);
  }
  saveNew(student: Student): Observable<any> {
    return this.http.post(this.api,student);
  }
  update(student: Student): Observable<any> {
    return this.http.patch(this.api,student);
  }
  delete(param: string): Observable<any> {
    return this.http.delete(`${this.api}${param}`);
  }
}
