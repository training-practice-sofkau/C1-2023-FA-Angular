import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  private api: string = 'http://localhost:8080/sofkau/courses/';

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }
  getByName(param: string): Observable<any> {
    return this.http.get(`${this.api}name/${param}`);
  }
  getByCoach(param: string): Observable<any> {
    return this.http.get(`${this.api}coach/${param}`);
  }
  getByLevel(param: string): Observable<any> {
    return this.http.get(`${this.api}level/${param}`);
  }
  saveNew(course: Course): Observable<any> {
    return this.http.post(this.api,course);
  }
  update(course: Course): Observable<any> {
    return this.http.patch(this.api,course);
  }
  delete(param: string): Observable<any> {
    return this.http.delete(`${this.api}${param}`);
  }
}
