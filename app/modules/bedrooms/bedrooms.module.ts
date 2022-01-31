import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BedroomsRoutingModule } from './bedrooms-routing.module';
import { BedroomsComponent } from './bedrooms.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    BedroomsComponent
  ],
  imports: [
    CommonModule,
    BedroomsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class BedroomsModule { }
