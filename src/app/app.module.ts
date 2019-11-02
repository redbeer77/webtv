import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsMenuModule } from './modules/channels-menu/channels-menu.module';
import { InitModule } from './modules/init/init.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChannelsMenuModule,
    InitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
