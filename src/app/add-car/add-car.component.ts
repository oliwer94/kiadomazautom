import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customStyle = {
    selectButton: {
      "background-color": "yellow",
      "border-radius": "25px",
      "color": "#000"
    },
    clearButton: {
      "background-color": "#FFF",
      "border-radius": "25px",
      "color": "#000",
      "margin-left": "10px"
    },
    layout: {
      "background-color": "purple",
      "border-radius": "25px",
      "border": "none",
      "color": "#FFF",
      "font-size": "15px",
      "margin": "10px",
      "padding-top": "5px",
      "width": "500px"
    },
    previewPanel: {
      "background-color": "#894489",
      "border-radius": "0 0 25px 25px",
    }
  }

}
