import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToiletComponent } from './toilet/toilet.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from './storage.service';
import { ReviewStorageService } from './review-storage.service';
import { ReviewListComponent } from './review-list/review-list.component';
import { MapComponent } from './map/map.component';
import { ToiletsComponent } from './toilets/toilets.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddToiletComponent } from './add-toilet/add-toilet.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ToiletComponent,
    ReviewListComponent,
    MapComponent,
    ToiletsComponent,
    AddReviewComponent,
    AddToiletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [StorageService,ReviewStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }