import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedroomsdetailsComponent } from './bedroomsdetails.component';

const routes: Routes = [{ path: '', component: BedroomsdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BedroomsdetailsRoutingModule { }
