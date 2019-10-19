import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChannelsMenuService } from './service/channels-menu.service';
import { channels } from './models/channel.model';

@Component({
  selector: 'app-channels-menu',
  templateUrl: './channels-menu.component.html',
  styleUrls: ['./channels-menu.component.scss']
})
export class ChannelsMenuComponent implements OnInit {
  public channels: channels[];
  public urlView:string;
  constructor(public channService:ChannelsMenuService) { }

  @Output() channelSel = new EventEmitter<string>();

  ngOnInit() {
      this.channService.getAllChannels().subscribe(data=> this.channels = this.channService.processChannelInfo(data));
  }
  toSew(channel:channels){
    // console.log(channel)
    // debugger;
    // this.urlView = channel.options[0].url
     this.channelSel.emit(channel.options[0].url)
   
  }
}
