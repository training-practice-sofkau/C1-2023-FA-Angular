import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map, reduce, zip } from 'rxjs';
import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService{

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/courses"
  
  getAll(): Observable<any>{
    return this.http.get(this.api);
  }

  getByName(name: string): Observable<any>{
    return this.http.get(this.api+"/byName/"+name);
  }

  getByCoach(coach: string): Observable<any>{
    return this.http.get(this.api+"/byCoach/"+coach);
  }

  getByLevel(level: number): Observable<any>{
    return this.http.get(this.api+"/byLevel/"+level);
  }

  getBystring(param: string): Observable<any>{
    let obsCourses: Observable<any> = zip(this.getByCoach(param), this.getByName(param)).pipe(map(x=>{x[0].concat(x[1])}));
    obsCourses = obsCourses.pipe(map((courses: Course[])=> courses.filter((v,i,a)=>a.findIndex(v2=>(JSON.stringify(v) === JSON.stringify(v2)))===i)));
   return obsCourses;
  }
  
  saveCourse(course: Course): Observable<any>{
    return this.http.post(this.api,course);
  }

  updateCourse(course: Course): Observable<any>{
    return this.http.put(this.api,course);
  }

  studentToCourse(courseId: string, studentId: string): Observable<any>{
    return this.http.put(this.api+"/"+courseId+"/student/"+studentId,null);
  }

  deleteCourse(courseId: string): Observable<any>{
    return this.http.delete(this.api+"/"+courseId);
  }
}
