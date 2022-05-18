import { Injectable } from '@angular/core';
import { Toilet } from './toilet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { ToiletReq } from './toiletReq';
import { ReviewReq } from './reviewReq';
import { Review } from './review';


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

  getReviews( id:string ) : Observable<Review[]>{
    return this.http.get<Review[]>(`http://localhost:8080/toilets/${id}/reviews`);
  }

  async addToilet( t:ToiletReq ) {
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    let newToilet: Toilet = await firstValueFrom(this.http.post<Toilet>("http://localhost:8080/toilets", t, {headers}));
  }

  async addReview( r:ReviewReq , id:string) {
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    let newReview: Review = await firstValueFrom(this.http.post<Review>(`http://localhost:8080/toilets/${id}/reviews`, r, {headers}));
  }

  
}