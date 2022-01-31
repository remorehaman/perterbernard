import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BedroomsdetailsRoutingModule } from './bedroomsdetails-routing.module';
import { BedroomsdetailsComponent } from './bedroomsdetails.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    BedroomsdetailsComponent
  ],
  imports: [
    CommonModule,
    BedroomsdetailsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BedroomsdetailsModule { }
