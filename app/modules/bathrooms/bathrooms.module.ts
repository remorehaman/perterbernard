import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BathroomsRoutingModule } from './bathrooms-routing.module';
import { BathroomsComponent } from './bathrooms.component';
import { HeaderModule } from 'src/app/modules/header/header.module';
import { FooterModule } from 'src/app/modules/footer/footer.module';
import { SpinnersAngularModule } from 'spinners-angular';
import { MaterialmoduleModule } from 'src/app/materialmodule/materialmodule/materialmodule.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    BathroomsComponent
  ],
  imports: [
    CommonModule,
    BathroomsRoutingModule,
    HeaderModule,
    FooterModule,
    //SpinnersAngularModule,
    //MaterialmoduleModule
    NgxSpinnerModule 
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BathroomsModule { }
