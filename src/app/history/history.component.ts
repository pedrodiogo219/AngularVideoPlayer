import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  urlArray=[];
  @Output() bookmarkEvent = new EventEmitter<string>();
  @Output() playVideoEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    const myData = JSON.parse(localStorage.getItem('urlArray'));
    console.log("achei isso history: " + myData)
    if(myData == null) this.urlArray = []
    else this.urlArray = myData
  }
  
  deleteItem(url : any){
    for(let i=0 ;i<= this.urlArray.length ;i++){
      if(url == this.urlArray[i]){     
        this.urlArray.splice(i,1)
        localStorage.setItem('urlArray', JSON.stringify(this.urlArray));
        break
      }   
    } 
  }

  bookmarkItem(url: any){
    this.bookmarkEvent.emit(url)
  }

  playVideo(url: any){
    this.playVideoEvent.emit(url)
  }

  addUrl(url: any){
    this.urlArray.push(url)
    localStorage.setItem('urlArray', JSON.stringify(this.urlArray));
  }
}
