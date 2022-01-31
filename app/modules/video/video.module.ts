import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class VideoModule { }
