import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() urlEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  urlSubmit(value:any){ 
    console.log(value)
    if(value.url){    
      this.urlEvent.emit(value.url)
    }else{      
      alert('The field is blank')    
    }  
  }
}
