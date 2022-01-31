import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchensRoutingModule } from './kitchens-routing.module';
import { KitchensComponent } from './kitchens.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    KitchensComponent
  ],
  imports: [
    CommonModule,
    KitchensRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class KitchensModule { }
