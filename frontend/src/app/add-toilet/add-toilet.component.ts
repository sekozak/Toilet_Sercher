import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-toilet',
  templateUrl: './add-toilet.component.html',
  styleUrls: ['./add-toilet.component.css']
})
export class AddToiletComponent implements OnInit {
  model = {
    name : '',
    coordinates : {
      lat : 0,
      lng : 0
    },
    adress : {
      street : '',
      city : ''
    },
    description : '',
    reviews : [{
      username : '',
      body : '',
      date : new Date()
    }]
  };
  str='';

  constructor() { }

  ngOnInit(): void {
  }

  newHero() {
    this.model = {
      name : '',
      coordinates : {
        lat : 0,
        lng : 0
      },
      adress : {
        street : '',
        city : ''
      },
      description : '',
      reviews : [{
        username : '',
        body : '',
        date : new Date()
      }]
    };
  }

  senditem() {

  }

}
