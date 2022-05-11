import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-toilets',
  templateUrl: './toilets.component.html',
  styleUrls: ['./toilets.component.css']
})
export class ToiletsComponent implements OnInit {
  // public toiletList : Toilet[] = []
  
  constructor(private toiletService : StorageService) { 
  
  }

  ngOnInit(): void {
    this.toiletService.getToilets().subscribe(data => {
      this.toiletList = data;
    })
  }


  public toiletList:Toilet[]=[{
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
