import { Directive, ElementRef, OnInit, Input, SimpleChanges,OnChanges  } from '@angular/core';
import * as HLS from 'hls.js';

@Directive({
  selector: '[appVideoHls]'
})
export class VideoHlsDirective implements OnInit,OnChanges{
  
  @Input('scr') scr: any;

  private hls : any;
  private element: HTMLVideoElement;
  
  constructor(videoPlayer: ElementRef) { 
    this.element = videoPlayer.nativeElement;
     this.element.muted = true;
    this.element.autoplay = true;

  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.scr){
      console.log("on change")
      this.establishHlsStream();
    }
  }

  ngOnInit(): void {
    this.establishHlsStream();
  }
  establishHlsStream(): void {
    if (this.hls) {
      this.hls.destroy();
    }
    this.hls = new HLS({
      startLevel: 2,
      capLevelToPlayerSize: true,
    });

    if (HLS.isSupported()) {
  
      if (this.scr){
        this.hls.loadSource(this.scr);
        this.hls.attachMedia(this.element);
  
        this.hls.on(HLS.Events.MANIFEST_PARSED,function() {
          this.element.play();
      });
      }
    
    }
  }

}
