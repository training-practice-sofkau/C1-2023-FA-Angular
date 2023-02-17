import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, of } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient, private router: Router) {}

  type: string = 'save';
  errorMsg: string = '';
  api: string = 'http://localhost:8080/students';

  getType() {
    return this.type;
  }

  changeType(type: string) {
    this.type = type;
  }

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByIdNum(input: string): Observable<any> {
    return this.http.get(`${this.api}/idNum/${input}`);
  }

  getByName(input: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.api}/name/${input}`);
  }

  postStudent(student: Student) {
    this.router.navigate(['/students']);
    return this.http.post(this.api, student);
  }

  updateStudent(student: Student) {
    return this.http.put(`${this.api}/${student.id}`, student).subscribe({
      next: (data) => {
        alert(
          'Dear client, the student: ' +
            student.name +
            ' was modified. Thanks. Bye!'
        ),
          this.router.navigate(['/students']);
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

  filterParameterType(option: string, input: string): Observable<Student[]> {
    switch (option) {
      case 'Name':
        return this.getByName(input);
        break;
      case 'IdNum':
        return this.getByIdNum(input);
      default:
        return new Observable<Student[]>();
    }
  }
}
