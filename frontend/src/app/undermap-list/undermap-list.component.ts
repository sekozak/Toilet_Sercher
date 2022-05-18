import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coordinate } from '../coordiante';
import { StorageService } from '../storage.service';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-undermap-list',
  templateUrl: './undermap-list.component.html',
  styleUrls: ['./undermap-list.component.css']
})
export class UndermapListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<number[]>();

  sendMessage(i:number){
    let cord=[this.toiletList[i].coordinates.lat, this.toiletList[i].coordinates.lng];
    this.messageEvent.emit(cord);
  }

  public toiletList : Toilet[] = []
  constructor(private toiletService : StorageService) { }

  ngOnInit(): void {
    this.toiletService.getToilets().subscribe(data => {
      this.toiletList = data;
    })
  }

}
