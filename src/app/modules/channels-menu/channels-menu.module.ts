import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsMenuComponent } from './channels-menu.component';
import { ChannelsMenuService } from './service/channels-menu.service';
import { HttpClientModule } from '@angular/common/http';
import { VideoHlsModule } from '../video-hls/video-hls.module';

@NgModule({
  declarations: [ChannelsMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    VideoHlsModule
  ],
  exports:[ChannelsMenuComponent],
  providers:[ChannelsMenuService]
})
export class ChannelsMenuModule { }
