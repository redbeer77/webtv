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
  public channelSelected: string;
  constructor(public channService:ChannelsMenuService) { }

  @Output() channelSel = new EventEmitter<string>();

  ngOnInit() {
      this.channService.getAllChannels().subscribe(data=> this.channels = this.channService.processChannelInfo(data));
  }
  toSew(channel:channels){
    // console.log(channel)
    // debugger;
    // this.urlView = channel.options[0].url
    this.channelSelected = channel.options[0].url
    //  this.channelSel.emit(channel.options[0].url)
   
  }
  isSelected(channel):boolean
  {
//      if (channel.name === "Ten"){
//     //   console.log(channel.options.length > 0 && channel.options[0].hasOwnProperty("url") ? channel.options[0].url : "")
//     //   debugger;
    
//     // debugger;
//     //  console.log((channel.options[0].url? channel.options[0].url:"este"))
//  debugger;
// //       channel.options[0].hasOwnProperty('url')
// console.log("length",channel.options.length > 0)
// console.log("propiedad Url",channel.options[0].hasOwnProperty("url"))
// console.log("comparacion",channel.options.length > 0 && channel.options[0].hasOwnProperty("url"))
// console.log( (channel.options.length > 0 && channel.options[0].hasOwnProperty("url") ? channel.options[0].url : "nada"))
// }
    return   this.channelSelected === (channel.options.length > 0 && channel.options[0].hasOwnProperty("url") ? channel.options[0].url : "")

  }
}
