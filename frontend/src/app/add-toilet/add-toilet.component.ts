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
      lat : 0,
      lng : 0
    },
    address : {
      street : '',
      city : ''
    },
    description : '',
    paid : true
  };
  str='';

  constructor(private toiletService : StorageService) { }

  ngOnInit(): void {
  }

  newHero() {
    this.model = {
      name : '',
      coordinates : {
        lat : 0,
        lng : 0
      },
      address : {
        street : '',
        city : ''
      },
      description : '',
      paid : true
    };
  }

  check(){
    const checkbox = document.getElementById('paid', ) as HTMLInputElement;   
    this.model.paid=checkbox.checked;
  }
  
  senditem() {
    this.toiletService.addToilet(this.model);
    this.newHero();
  }

}
