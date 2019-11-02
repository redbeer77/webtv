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
    // debugger;
    
    // console.log(changes.url.currentValue)
    this.url =  changes.url.currentValue||null;
    // this.doSomething();
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

}
}
