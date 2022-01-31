import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
//import { SpinnerDottedModule } from 'spinners-angular/spinner-dotted';
//import { MaterialmoduleModule } from './materialmodule/materialmodule/materialmodule.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    //Ng2SearchPipeModule,
    //SpinnerDottedModule,
    //MaterialmoduleModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
  
    // ----------ngxs----------
    NgxsModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
