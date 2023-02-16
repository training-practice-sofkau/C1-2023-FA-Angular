import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  url: string = 'http://localhost:8080/api/v1/sofka_catalog/course/';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getCourseById(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}${id}`);
  }

  editCourse(id: string, form: any): Observable<any> {
    return this.httpClient.put(`${this.url}edit`, {
      id: id,
      name: form.name,
      coach: form.coach,
      level: form.level,
    });
  }

  saveCourse(form: any): Observable<any> {
    return this.httpClient.post(`${this.url}`, form);
  }

  deleteCourse(id: string): Observable<any> {
    return this.httpClient.delete(`${this.url}delete`, {
      body: {
        id: id,
      },
    });
  }

  getCoursesByLevel(level: number): Observable<any> {
    return this.httpClient.get(`${this.url}level/${level}`);
  }

  getCoursesByName(name: string): Observable<any> {
    return this.httpClient.get(`${this.url}name/${name}`);
  }

  getCoursesByCoach(coach: string): Observable<any> {
    return this.httpClient.get(`${this.url}coach/${coach}`);
  }
}
