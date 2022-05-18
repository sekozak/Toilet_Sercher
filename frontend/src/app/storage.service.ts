import { Injectable } from '@angular/core';
import { Toilet } from './toilet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToiletReq } from './toiletReq';
import { ReviewReq } from './reviewReq';


@Injectable({
  providedIn: 'root'
})
export class StorageService{
  toilets:Toilet[] = [];

  constructor(private http:HttpClient) {
  
  }

  getToilets() : Observable<Toilet[]>{
    return this.http.get<Toilet[]>("http://localhost:8080/toilets");
  }

  addToilet( t:ToiletReq ) {
    this.http.post<ToiletReq>("http://localhost:8080/toilets", t);
  }

  addReview( r:ReviewReq , id:string) {
    this.http.post<ReviewReq>(`http://localhost:8080/toilets/${id}/reviews`, r);
  }

  
}