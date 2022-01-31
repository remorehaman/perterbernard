import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtocartRoutingModule } from './addtocart-routing.module';
import { AddtocartComponent } from './addtocart.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    AddtocartComponent
  ],
  imports: [
    CommonModule,
    AddtocartRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AddtocartModule { }
