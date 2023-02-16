import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class RelationService {
  constructor(private http: HttpClient) {}

  private api: string = 'http://localhost:8080/sofkau/relation/';

  relationsFromStudent(student : string) : Observable<any> {
    return this.http.get(`${this.api}student/${student}`);
  }
  relationsFromCourse(course : string) : Observable<any> {
    return this.http.get(`${this.api}course/${course}`);
  }

}
