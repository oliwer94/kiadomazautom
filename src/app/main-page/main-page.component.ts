import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = 'Kiadomazautom';
  carList = [3,3,0,3,3,0,3,3,0,3];

  listView = true;
  
  enableListView()
  {
    this.listView = true;    
  }
  enableCardView()
  {
    this.listView = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
