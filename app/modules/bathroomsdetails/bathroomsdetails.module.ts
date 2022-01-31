import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BathroomsdetailsRoutingModule } from './bathroomsdetails-routing.module';
import { BathroomsdetailsComponent } from './bathroomsdetails.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    BathroomsdetailsComponent,
    
  ],
  imports: [
    CommonModule,
    BathroomsdetailsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule
    
  ]
})
export class BathroomsdetailsModule { }
