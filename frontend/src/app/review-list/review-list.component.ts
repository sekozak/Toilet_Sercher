import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../review';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  toilets=[{
    name : 'bania',
    coordinates : [{
      lat : 12,
      lng : 12
    }],
    adress : [{
      street : 'szewska',
      city : 'krk'
    }],
    description : 'parter, na koncu korytarza',
    reviews : [{
      username : 'kuba',
      body : 'duze kolejki',
      date : new Date()
    }]
  }];

  reviews: Review[] = [] ;
  id=0;

  constructor(private router:ActivatedRoute) {
    this.id=this.router.snapshot.params['id'];
    this.reviews=this.toilets[this.id].reviews;
  }
  
  update(): void {

  }

  ngOnInit(): void {

  }

}
