import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService{

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/api/courses"


  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByID(param: string): Observable<any> {
    return this.http.get(this.api+"/"+param);
  }

  post(course:Course):  Observable<any> {
    return this.http.post(this.api, course);
  }

  update(param: string, course:Course): Observable<any> {
    return this.http.put(this.api+"/"+param, course);
  }

  deleteByID(param: string):  Observable<any> {
    return this.http.delete(this.api+"/"+param);
  }
}
