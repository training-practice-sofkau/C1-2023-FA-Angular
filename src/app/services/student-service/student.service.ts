import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  url: string = "http://localhost:8080/api/v1/sofka_catalog/student/"

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  saveStudent(form: any): Observable<any>{
    return this.httpClient.post(this.url, form);
  }
}
