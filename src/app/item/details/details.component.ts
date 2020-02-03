import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  @Input() itemDetails;

  // Conditional Rendering 
  title;
  pictures;
  specs;
  

  constructor() { }

  ngOnInit() {

    this.title = this.itemDetails.title;
    this.pictures = this.itemDetails.pictures;
    this.specs = this.itemDetails.itemDetails;
  }

  // Open the picture in a new tab
  openTab(path){
    window.open(path, "_blank");
  }
 
}
