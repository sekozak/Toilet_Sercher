import { Injectable } from '@angular/core';
import { Toilet } from './toilet';


@Injectable({
  providedIn: 'root'
})
export class StorageService{
  toiletlist:Toilet[];

  constructor() {
    this.toiletlist=[];
  }

  
}