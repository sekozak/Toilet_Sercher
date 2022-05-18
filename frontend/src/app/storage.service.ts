import { Injectable } from '@angular/core';
import { Toilet } from './toilet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToiletReq } from './toiletReq';


@Injectable({
  providedIn: 'root'
})
export class StorageService{
  toilets:Toilet[] = [];

  constructor(private http:HttpClient) {
  
  }

  getToilets() : Observable<Toilet[]>{
<<<<<<< HEAD
    return this.http.get<Toilet[]>("http://localhost:8080/toilets");
  }

  addToilet( t:ToiletReq ) {
    this.http.post<ToiletReq>("http://localhost:8080/toilets", t);
=======
    return this.http.get<Toilet[]>("http://localhost:4200/toilets");
>>>>>>> 7e5ea47da5ff738de6b505b5c034f3e388dbbe27
  }

  
}