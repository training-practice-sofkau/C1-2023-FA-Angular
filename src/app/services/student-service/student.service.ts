import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { Student } from 'src/app/models/student.model';



@Injectable({
  providedIn: 'root'
})
export class StudentService{

  constructor(
    private http: HttpClient
  ) { }

  api: string = "http://localhost:8080/api/students"


  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByName(filterParam: string): Observable<any> {
    return this.http.get(`${this.api}/name/${filterParam}`)
  };

  getByDni(filterParam: string): Observable<any> {
    return this.http.get(`${this.api}/${filterParam}`)
  };

  postStudent(student: Student){
    return this.http.post(this.api, student);
  };

  update(student: Student, studentID: string){
    return this.http.put(`${this.api}/${studentID}`, student);
  };

  deleteStudent(studentID: string){
    return this.http.delete(`${this.api}/${studentID}`);
  }
}
