import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../models/course.model";
import {Student} from "../../models/student.model";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) {
    }

    api: string = "http://localhost:8080/courses";

    getAll(): Observable<any> {
        return this.http.get(this.api);
    }

    getByName(name: string): Observable<any> {
        return this.http.get(this.api + `/byname/${name}`);
    }

    getByCoach(coach: string): Observable<any> {
        return this.http.get(this.api + `/bycoach/${coach}`);
    }

    getByLevel(level: number): Observable<any> {
        return this.http.get(this.api + `/bylevel/${level}`);
    }

    saveNewCourse(course: Course): Observable<any> {
        return this.http.post(this.api, course);
    }

    updateCourse(course: Course): Observable<any> {
        return this.http.put(this.api, course);
    }

    changeRegistrationStudent(student: Student): Observable<any> {
        return this.http.put(this.api + "/studentList", student);
    }

    deleteCourse(id: string) {
        this.http.delete(this.api + `/${id}`);
    }

    deleteStudentFromCourse(id: string) {
        this.http.delete(this.api + `/student/${id}`);
    }

}
