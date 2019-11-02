import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-video-hls',
  templateUrl: './video-hls.component.html',
  styleUrls: ['./video-hls.component.css']
})
export class VideoHlsComponent  {

@Input('url') url:string;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
     this.url =  changes.url.currentValue||null;
}
}
