import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService{

  url: string = "http://localhost:8080/api/v1/sofka_catalog/course/"

  constructor(
    private httpClient: HttpClient
  ) {}

  getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }
}
