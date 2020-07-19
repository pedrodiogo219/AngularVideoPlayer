import { Component, OnInit, Sanitizer, Input } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  
  yt_iframe_html: any;
  @Input() url:string = "https://www.youtube.com/watch?v=_kMqZecJtzw";
  
  
  constructor(private embedService: EmbedVideoService) { 
  }
  
  ngOnInit(): void {
  }

  updateVideoWithNewUrl(newUrl: string){
    this.url = newUrl
    this.yt_iframe_html = this.embedService.embed(this.url, {
      // query: { portrait: 0, color: '333' },
      attr: { width: "100%", height:"100%"}
    });
  }
}
