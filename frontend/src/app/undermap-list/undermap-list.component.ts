import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Toilet } from '../toilet';

@Component({
  selector: 'app-undermap-list',
  templateUrl: './undermap-list.component.html',
  styleUrls: ['./undermap-list.component.css']
})
export class UndermapListComponent implements OnInit {
  public toiletList : Toilet[] = []
  
  constructor(private toiletService : StorageService) { 
  
  }

  ngOnInit(): void {
    this.toiletService.getToilets().subscribe(data => {
      this.toiletList = data;
    })
  }

}
