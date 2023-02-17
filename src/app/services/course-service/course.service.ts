import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService{

  constructor(
    private http: HttpClient
  ) { }

  api: string = "http://localhost:8080/api/courses"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByName(filterParam: string, coursesList: Course[]): Observable<any> {
    return this.http.get(`${this.api}/name/${filterParam}`)
  }

  getByCoach(filterParam: string, coursesList: Course[]): Observable<any> {
    return this.http.get(`${this.api}/coach/${filterParam}`)
  }

  getByLevel(filterParam: string, coursesList: Course[]): Observable<any> {
    return this.http.get(`${this.api}/level/${filterParam}`)
  }

  postCourse(course: Course){
    return this.http.post(this.api, course);
  };

  updateCourse(course: Course, courseID: string){
    return this.http.put(`${this.api}/${courseID}`, course);
  }
}
