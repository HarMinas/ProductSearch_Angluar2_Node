import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor() { }



  @Input() sellerDetails;


  // conditional rendering
  topRated:boolean;
  highScore: boolean;
  feedbackScore: number;

  //instance fields
  radius = 25;
  color = '#28a745';//success green
  bgColor = '#ffffff'; //white
  maxPopularity = 100;
  sellerPopularity;

  ngOnInit() {
    this.topRated = this.sellerDetails.topRated.value;
    this.feedbackScore = parseInt(this.sellerDetails.feedbackScore.value);
    if(this.feedbackScore > 10000){
      this.highScore = true;
    }else{
      this.highScore = false;
    }
    this.sellerPopularity = this.sellerDetails.popularity.value;


  }
  

    

}
