import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesdetailsRoutingModule } from './accessoriesdetails-routing.module';
import { AccessoriesdetailsComponent } from './accessoriesdetails.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    AccessoriesdetailsComponent
  ],
  imports: [
    CommonModule,
    AccessoriesdetailsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AccessoriesdetailsModule { }
