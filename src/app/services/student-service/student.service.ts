import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService{

  constructor(private http : HttpClient) { }

  private api : string = "http://localhost:8080/sofkau/students/";

  getAll() : Observable<any>  {
    return this.http.get(this.api);
  }
}
