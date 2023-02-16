import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { envDev } from 'src/environment/envDev';

@Injectable({
  providedIn: 'root'
})
export class CourseService{

  api:string = envDev.url+"courses"

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.api)
  }

  updateCourse(course:Course):Observable<any>{
    return this.http.put(this.api,course)
  }

  saveCourse(course:Course):Observable<any>{
    return this.http.post(this.api,course)
  }

  deleteCourse(id:string):Observable<any>{
    return this.http.delete(this.api+`/delete?courseId=${id}`,{responseType: 'text'})
  }

}
