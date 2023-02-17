import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../models/student.model";
import * as http from "http";

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    api: string = "http://localhost:8080/students";

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<any> {
        return this.http.get(this.api);
    }

    getByIdNum(idNum: string): Observable<any> {
        return this.http.get(this.api + `/byidnum/${idNum}`);
    }

    getByName(name: string): Observable<any> {
        return this.http.get(this.api + `/byname/${name}`);
    }

    saveNewStudent(student: Student): Observable<any> {
        return this.http.post(this.api, student);
    }

    updateStudent(student: Student): Observable<any> {
        return this.http.put(this.api, student);
    }

    deleteStudent(id: string): Observable<any>{
        return this.http.delete(this.api+`/${id}`)
    }
}
