import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {


  @Input() shippingDetails;

  //conditional rendering
  expedited:boolean;
  oneDay:boolean;
  returnsAccepted:boolean;


  constructor() { }

  ngOnInit() {
    
    this.expedited = this.shippingDetails.expedited.value;
    this.oneDay = this.shippingDetails.oneDay.value;
    this.returnsAccepted = this.shippingDetails.returnAccepted.value;
  
    console.log(this.shippingDetails)
  }

}
