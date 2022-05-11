import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'toilet',
  templateUrl: './toilet.component.html',
  styleUrls: ['./toilet.component.css']
})


export class ToiletComponent implements OnInit {
  @Input() info:any;


  constructor(private storage:StorageService, private router:Router){
  }
  ngOnInit(): void {
  }


  ngOnChanges(){
  }

}