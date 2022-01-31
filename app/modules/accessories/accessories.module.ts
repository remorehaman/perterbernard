import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { AccessoriesComponent } from './accessories.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AccessoriesModule { }
