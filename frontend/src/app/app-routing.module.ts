import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddToiletComponent } from './add-toilet/add-toilet.component';
import { MapComponent } from './map/map.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ToiletsComponent } from './toilets/toilets.component';


const routes: Routes = [{ path: 'map', component: MapComponent }, 
{ path: 'menu', component: ToiletsComponent }, 
{ path: 'add-toilet-review/:id', component: AddReviewComponent },
{ path: 'toilet-reviews/:id', component: ReviewListComponent },
{ path: 'add-toilet', component: AddToiletComponent },
{ path: '', redirectTo: '/map', pathMatch: 'full' }, 
{ path: '**', component: MapComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
