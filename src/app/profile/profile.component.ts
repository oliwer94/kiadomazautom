import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  carList = [3,3,3];
  ngOnInit() {
  }
  Name = "Oliver Arnits"

  listView = true;
  
  enableListView()
  {
    this.listView = true;    
  }
  enableCardView()
  {
    this.listView = false;
  }
}
