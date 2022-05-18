import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../review';
import { StorageService } from '../storage.service';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  reviews: Review[] = [] ;
  id='';

  constructor(private router:ActivatedRoute, private toiletService : StorageService) {
    this.id=this.router.snapshot.params['id'];
    this.toilets.forEach(e=>{
      if(e.id==this.id){
        this.reviews=e.reviews;
      }
    })
    // this.reviews=this.toilets[this.id].reviews;
  }
  


  ngOnInit(): void {}

  public toilets:Toilet[]=[{
    id : 'fgvdgsd77',
    name : 'bania',
    coordinates : {
      lat : 12,
      lng : 12
    },
    adress : {
      street : 'szewska',
      city : 'krk'
    },
    description : 'parter, na koncu korytarza',
    reviews : [{
      username : 'kuba',
      body : 'duze kolejki',
      date : new Date()
    }]
  },
  {
    id : '77fgvdgsd',
    name : 'bania2',
    coordinates : {
      lat : 12,
      lng : 12
    },
    adress : {
      street : 'szewska',
      city : 'krk'
    },
    description : 'parter, na koncu korytarza',
    reviews : [{
      username : 'kubus',
      body : 'duze kolejki',
      date : new Date()
    },
    {
      username : 'marcin',
      body : 'masno ni',
      date : new Date()
    }]
  }];

}