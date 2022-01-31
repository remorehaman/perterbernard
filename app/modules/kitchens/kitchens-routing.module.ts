import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchensComponent } from './kitchens.component';

const routes: Routes = [{ path: '', component: KitchensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchensRoutingModule { }
