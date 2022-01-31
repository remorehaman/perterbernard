import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesdetailsComponent } from './accessoriesdetails.component';

const routes: Routes = [{ path: '', component: AccessoriesdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesdetailsRoutingModule { }
