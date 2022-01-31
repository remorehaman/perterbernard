import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { LoadingBarModule } from '@ngx-loading-bar/core';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    //LoadingBarModule
  ]
})
export class SearchModule { }
