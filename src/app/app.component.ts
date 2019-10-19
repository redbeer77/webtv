import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'webtdt';
  public url:string = 'https://cflive-emea.live-delivery.ooyala.com/out/u/jb44pwd2tj7w5/111819/wyYXIxZTE6okZbyKLzxq8TXa4a-SQlAO/cs/d77d4356674b449695b1c0f19fbd6fae_6.m3u8';

  public changeChannel(url:string){
    debugger;
        this.url =url;
  }
}
