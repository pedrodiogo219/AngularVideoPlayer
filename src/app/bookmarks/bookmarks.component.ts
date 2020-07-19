import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarkArray = [];
  numberBookmarks = 0;
  @Output() playVideoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    const myData = JSON.parse(localStorage.getItem('bookmarkArray'));
    console.log("achei isso bookmark: " + myData)
    if(myData == null) this.bookmarkArray = []
    else this.bookmarkArray = myData

    this.numberBookmarks = this.bookmarkArray.length;
    console.log("nbookmarks: " + this.numberBookmarks)
  }

  deleteItem(url : any){
    for(let i=0 ;i<= this.bookmarkArray.length ;i++){
      if(url == this.bookmarkArray[i]){     
        this.bookmarkArray.splice(i,1)
        localStorage.setItem('bookmarkArray', JSON.stringify(this.bookmarkArray));
        break
      }   
    }
  }

  playVideo(url: any){
    this.playVideoEvent.emit(url)
  }

  addBookmark(url: any){
    for(let bm of this.bookmarkArray){
      console.log("bm: " + bm)
      if(bm == url){
        return;
      }
    }
    this.bookmarkArray.push(url)
    localStorage.setItem('bookmarkArray', JSON.stringify(this.bookmarkArray));
  }
}
