import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BathroomsComponent } from './bathrooms.component';

const routes: Routes = [{ path: '', component: BathroomsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BathroomsRoutingModule { }
