import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor() { }

  @Input() photos;

 
  openInTab=(url)=>{
    window.open(url, "_blank");
  }

  ngOnInit() {

    
  }

}
