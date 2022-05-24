import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-toilets',
  templateUrl: './toilets.component.html',
  styleUrls: ['./toilets.component.css']
})
export class ToiletsComponent implements OnInit {
  public toiletList : Toilet[] = []
  
  constructor(private toiletService : StorageService) { }

  ngOnInit(): void {
    this.toiletService.getToilets().subscribe(data => {
      this.toiletList = data;
    })
  }

}
