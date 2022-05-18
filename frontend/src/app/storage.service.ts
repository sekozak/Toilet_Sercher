import { Injectable } from '@angular/core';
import { Toilet } from './toilet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { ToiletReq } from './toiletReq';


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

  async addToilet( t:ToiletReq ){
    let headers = new HttpHeaders({"Content-Type": "application/json"})
    let newToilet: Toilet = await firstValueFrom(this.http.post<Toilet>("http://localhost:8080/toilets", t, {headers}));
    console.log("Toilet added!");
    console.log(t);
    console.log(newToilet);
  }
}