import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvalcovesdetailsRoutingModule } from './tvalcovesdetails-routing.module';
import { TvalcovesdetailsComponent } from './tvalcovesdetails.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    TvalcovesdetailsComponent
  ],
  imports: [
    CommonModule,
    TvalcovesdetailsRoutingModule,
    HeaderModule,
    FooterModule,
    CarouselModule
  ]
})
export class TvalcovesdetailsModule { }
