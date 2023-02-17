import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, of } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient, private router: Router) {}

  type: string = 'save';
  errorMsg: string = '';
  api: string = 'http://localhost:8080/courses';
  emptyBody = {};

  getType() {
    return this.type;
  }

  changeType(type: string) {
    this.type = type;
  }

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByLevel(input: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.api}/level/${input}`);
  }

  getByName(input: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.api}/name/${input}`);
  }

  getByCoach(input: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.api}/coach/${input}`);
  }

  postCourse(course: Course) {
    this.router.navigate(['/courses']);
    return this.http.post(this.api, course);
  }

  updateCourse(course: Course) {
    return this.http.put(`${this.api}/${course.id}`, course).subscribe({
      next: (data) => {
        alert(
          'Dear client, the course: ' +
            course.name +
            ' was modified. Thanks. Bye!'
        ),
          this.router.navigate(['/courses']);
        return data;
      },
      error: (err) =>
        alert(
          'Dear client, please check all the info again. with regards the developer team'
        ),
      complete: console.log,
    });
  }

  addStudentToCourse(idCourse: string, idStudent: string) {
    this.http
      .put(`${this.api}/${idCourse}/students/${idStudent}`, this.emptyBody)
      .subscribe({
        next: (data) => {
          alert('Dear client, the student was added. Thanks. Bye!'),
            this.router.navigate(['/courses']);
          return data;
        },
        error: (err) =>
          alert(
            'Dear client, please check all the info again. with regards the developer team'
          ),
        complete: console.log,
      });
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete(this.api + '/' + id).pipe(
      catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = `Error: ${error.message}`;
        }
        return of(0);
      })
    );
  }

  removeStudentFromCourse(idCourse: string, idStudent: string) {
    this.http
      .delete(`${this.api}/${idCourse}/students/${idStudent}`)
      .subscribe({
        next: (data) => {
          alert('Dear client, the student was removed. Thanks. Bye!'),
            this.router.navigate(['/courses']);
          return data;
        },
        error: (err) =>
          alert(
            'Dear client, please check all the info again. with regards the developer team'
          ),
        complete: console.log,
      });
  }

  filterParameterType(option: string, input: string): Observable<Course[]> {
    console.log(option)
    switch (option) {
      case 'level':
        return this.getByLevel(input);
        break;
      case 'name':
        return this.getByName(input);
        break;
      case 'coach':
        return this.getByCoach(input);
        break;
      default:
        return new Observable<Course[]>();
    }
  }
}
