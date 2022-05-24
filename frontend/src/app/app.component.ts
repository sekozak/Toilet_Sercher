import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){}

  menuOpen = false;
  toogle(){
    if(!this.menuOpen) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }

}