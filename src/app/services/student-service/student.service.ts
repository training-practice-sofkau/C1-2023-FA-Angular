import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

 constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/students"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

}
