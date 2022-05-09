import { Component, OnInit } from '@angular/core';
import { Toilet } from '../toilet';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-toilets',
  templateUrl: './toilets.component.html',
  styleUrls: ['./toilets.component.css']
})
export class ToiletsComponent implements OnInit {
  // public toiletList:Toilet[]=[{
  //   name : 'bania',
  //   coordinates : {
  //     lat : 12,
  //     lng : 12
  //   },
  //   adress : {
  //     street : 'szewska',
  //     city : 'krk'
  //   },
  //   description : 'parter, na koncu korytarza',
  //   reviews : [{
  //     username : 'kuba',
  //     body : 'duze kolejki',
  //     date : new Date()
  //   }]
  // }];
  public toiletList : Toilet[] = []
  
  constructor(private toiletService : StorageService) { 
  
  }

  ngOnInit(): void {
    this.toiletService.getToilets().subscribe(data => {
      this.toiletList = data;
    })
  }

}
