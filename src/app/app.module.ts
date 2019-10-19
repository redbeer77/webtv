import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsMenuModule } from './modules/channels-menu/channels-menu.module';
import { VideoHlsModule } from './modules/video-hls/video-hls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChannelsMenuModule,
    VideoHlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
