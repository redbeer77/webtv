import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { channels } from '../models/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsMenuService {
  public urlChannels: string = 'http://91.121.64.179/tdt_project/output/channels.json';
  public channelsToMenu: channels[];
  constructor(private http: HttpClient) { }
 
  public getAllChannels() {
    return this.http.get(this.urlChannels);
  }

  public processChannelInfo(data:any):any[]{
    let spainChannels =  data.countries[0]
    let ambitos = spainChannels.ambits
    let generalistas = ambitos[0].channels;
    this.channelsToMenu = generalistas;
    return this.channelsToMenu
  }
}
