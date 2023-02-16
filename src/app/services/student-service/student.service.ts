import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  api: string = 'http://localhost:8080/api/students';

  getAllStudents(): Observable<any> {
    return this.http.get(this.api);
  }

  getByIdentificationNumber(idNumber: string): Observable<any> {
    return this.http.get(this.api + '/idNumber/' + idNumber);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(this.api + '/name/' + name);
  }

  postStudent(student: Student) {
    return this.http.post(this.api, student);
  }

  putStudent(student: Student): Observable<any> {
    return this.http.put(this.api, student);
  }

  deleteStudent(id: string) {
    return this.http.delete(this.api + '/' + id);
  }
}
