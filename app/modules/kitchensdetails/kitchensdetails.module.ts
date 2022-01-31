import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchensdetailsRoutingModule } from './kitchensdetails-routing.module';
import { KitchensdetailsComponent } from './kitchensdetails.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    KitchensdetailsComponent
  ],
  imports: [
    CommonModule,
    KitchensdetailsRoutingModule,
    FooterModule,
    HeaderModule
  ]
})
export class KitchensdetailsModule { }
