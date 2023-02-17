import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService{

 constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/courses"

  getAll(): Observable<any> {
      return this.http.get(this.api);
  }

  postCourse(couse: Course){
      return this.http.post(this.api, couse)
  }

  deleteCourse(id: number){
      return this.http.delete(`${this.api}/${id}`, { responseType: 'text' })
  }

  updateCourse(id: string, data: any){
    return this.http.put(`${this.api}/${id}`, data)
  }
}
