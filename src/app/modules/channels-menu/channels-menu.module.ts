import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsMenuComponent } from './channels-menu.component';
import { ChannelsMenuService } from './service/channels-menu.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ChannelsMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ChannelsMenuComponent],
  providers:[ChannelsMenuService]
})
export class ChannelsMenuModule { }
