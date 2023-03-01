import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  api: string = 'http://localhost:8080/api/courses';

  getAllCourses(): Observable<any> {
    return this.http.get(this.api);
  }

  getByLevel(level: string): Observable<any> {
    return this.http.get(this.api + '/level/' + level);
  }

  getByCoach(coach: string): Observable<any> {
    return this.http.get(this.api + '/coach/' + coach);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(this.api + '/name/' + name);
  }

  postCourse(course: Course) {
    return this.http.post(this.api, course);
  }

  putCourse(course: Course): Observable<any> {
    return this.http.put(this.api, course);
  }

  deleteCourse(id: string) {
    return this.http.delete(this.api + '/' + id);
  }
}
