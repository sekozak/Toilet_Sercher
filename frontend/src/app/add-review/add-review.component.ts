import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../review';
import { ReviewListComponent } from '../review-list/review-list.component';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Input() card:Toilet | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  model ={
    username : '',
    body : '',
    date : new Date()
  };

  newHero() {
    this.model = {
      username : '',
      body : '',
      date : new Date()
    };
  }

  senditem() {
    // this.reviewStorage.pushReview(this.card,this.model);
   }

}
