import { Injectable } from '@angular/core';
import { Review } from './review';
import { Toilet } from './toilet';

@Injectable({
  providedIn: 'root'
})
export class ReviewStorageService {
  reviews:[Review[]]=[[]];
  reviewedDishes:Toilet[] | undefined;


  public getReviews(d:Toilet){

  }

  public pushReview(d:Toilet,r:Review): void{

  }


  constructor() { }

}