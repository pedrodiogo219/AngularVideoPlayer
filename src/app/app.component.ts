import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { VideoViewComponent } from "./video-view/video-view.component";
import { HistoryComponent } from "./history/history.component";
import { BookmarksComponent } from "./bookmarks/bookmarks.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild(VideoViewComponent) vv;
  @ViewChild(HistoryComponent) hist;
  @ViewChild(BookmarksComponent) bookmarks;

  title = 'angularVideoPlayer';

  url:string;

  receiveUrl($event){
    this.url = $event
    this.vv.updateVideoWithNewUrl(this.url)
    this.hist.addUrl(this.url)
  }

  receiveBookmark($event){
    this.url = $event
    this.bookmarks.addBookmark(this.url)
  }

  receivePlayVideo($event){
    this.url = $event
    console.log("recebeu a url: " + this.url)
    this.vv.updateVideoWithNewUrl(this.url)
  }

  ngAfterViewInit(){
  }

}
