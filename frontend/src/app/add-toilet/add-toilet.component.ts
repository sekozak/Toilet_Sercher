import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-toilet',
  templateUrl: './add-toilet.component.html',
  styleUrls: ['./add-toilet.component.css']
})
export class AddToiletComponent implements OnInit {
  model = {
    name : '',
    coordinates : {
      lat : null,
      lng : null
    },
    adress : {
      street : '',
      city : ''
    },
    description : '',
    reviews : []
  };
  str='';

  constructor(private toiletService : StorageService) { }

  ngOnInit(): void {
  }

  newHero() {
    this.model = {
      name : '',
      coordinates : {
        lat : null,
        lng : null
      },
      adress : {
        street : '',
        city : ''
      },
      description : '',
      reviews : []
    };
  }

  senditem() {
    //this.toiletService.push(this.model);
    this.newHero();
  }

}
