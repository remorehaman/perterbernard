import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvalcovesdetailsComponent } from './tvalcovesdetails.component';

const routes: Routes = [{ path: '', component: TvalcovesdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvalcovesdetailsRoutingModule { }
