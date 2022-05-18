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
  }

  ngOnInit(): void {
    this.toiletService.getReviews(this.id).subscribe(data => {
      this.reviews = data;
    })
  }

}