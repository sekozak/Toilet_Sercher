import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id='';

  constructor(private router:ActivatedRoute, private toiletService : StorageService) {
    this.id=this.router.snapshot.params['id'];
   }

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
