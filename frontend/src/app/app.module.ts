import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToiletComponent } from './toilet/toilet.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { ReviewListComponent } from './review-list/review-list.component';
import { MapComponent } from './map/map.component';
import { ToiletsComponent } from './toilets/toilets.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddToiletComponent } from './add-toilet/add-toilet.component';
import { HttpClientModule } from '@angular/common/http';
import { UndermapListComponent } from './undermap-list/undermap-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ToiletComponent,
    ReviewListComponent,
    MapComponent,
    ToiletsComponent,
    AddReviewComponent,
    AddToiletComponent,
    UndermapListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }