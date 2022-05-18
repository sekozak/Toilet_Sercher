import { Injectable } from '@angular/core';
import { Toilet } from './toilet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  
}