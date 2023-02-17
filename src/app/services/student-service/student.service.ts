import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StudentService{

  constructor(
    private http: HttpClient
  ) { }

  api: string = "http://localhost:8080/api/students"


  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  /*
  getById(id: string): Observable<any>{
    return this.http.get(this.api+"/"+id);
  }

  getByName(filterParam: string, artistList: IArtist[]): Observable<IArtist[]> {

    let obsArtist: Observable<IArtist[]> = new Observable(observer =>{
      observer.next(artistList.filter(artist => artist.name.startsWith(filterParam)));
      observer.complete();
    });
    return obsArtist;
  }

  getByCountry (filterParam: string, artistList: IArtist[]): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(artistList.filter(artist => artist.country.startsWith(filterParam)));
      observer.complete();
    });

    return obsArtist;
  }

  postArtist(artist: IArtist){
    return this.http.post(this.api, artist);
  };

  deleteArtist(artistID: string){
    console.log(this.api+"/"+artistID);
    return this.http.delete(`${this.api}/${artistID}`);
  }

  updateArtist(artistID: string, artist: IArtist){
    return this.http.put(`${this.api}/${artistID}`, artist);
  }
  */
}
