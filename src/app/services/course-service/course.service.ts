import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
