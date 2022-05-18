import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../storage.service';

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
    description : ''
  };

  newHero() {
    this.model = {
      username : '',
      description : ''
    };
  }

  senditem() {
    this.toiletService.addReview(this.model, this.id);
    this.newHero();
   }

}
