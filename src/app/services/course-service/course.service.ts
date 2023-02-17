import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService{

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8090/courses"

  getAll(): Observable<any>{
    return this.http.get(this.api);
  }

  getByName(name: string): Observable<any>{
    return this.http.get(this.api+"/name/"+name)
  }

  getByCoach(coach: string): Observable<any>{
    return this.http.get(this.api+"/coach/"+coach)
  }

  getByLevel(level: string): Observable<any>{
    return this.http.get(this.api+"/level/"+level)
  }

  postCourse(course: Course){
    return this.http.post(this.api,course)
  }

  putCourse(course: Course){
    return this.http.put(this.api,course)
  }

  deleteCourse(id:string){
    return this.http.delete(this.api+"/"+id)
  }

}
