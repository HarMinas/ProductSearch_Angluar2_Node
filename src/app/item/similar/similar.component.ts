import { Component, OnInit, Input } from '@angular/core';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {

  constructor() { }

  
  //receiving data from parent
  @Input() similarItems;

  // conditional rendering 
  isMoreThanFive: boolean = false;
  showMore: boolean = false;
  orderDisabled: boolean = true;

  // instance variables
  numItems: number;
  iteratorArray;
  originalItems;


  
  ngOnInit() {
    
    
  }

  ngOnChanges(){
    this.numItems = this.similarItems.length;
    if(this.numItems > 5){
      this.isMoreThanFive = true;
      this.iteratorArray = new Array(5).fill(0);
    }else{
      this.isMoreThanFive = false;
      this.iteratorArray = new Array(this.numItems).fill(0);
    }
    this.originalItems = this.similarItems.slice();
  }

// Toggle More Items
  showMoreButton=()=>{
    this.showMore = !this.showMore;
  }

  // Communicate with the select boxes
  filter = "0";
  order = "0";
  filters = {
    default: "0",
    name: "1",
    days: "2",
    price: "3", 
    shipping: "4"
  }


  filterChange=()=>{
    console.log("filterChanged");
    switch(this.filter){
      
      case this.filters.default:
      console.log(this.originalItems);
       this.sortToOriginal();
        this.orderDisabled = true;
        console.log("case default");
        console.log(this.similarItems);
        break;
      case this.filters.name: this.sortByName(this.order);
        this.orderDisabled = false;
        console.log("case name");
        console.log(this.similarItems);
        break;
      case this.filters.price: this.sortByPrice(this.order);
        this.orderDisabled = false;
        console.log("case price");
        console.log(this.similarItems);

        break;
      case this.filters.days: this.sortByDays(this.order);
        this.orderDisabled = false;
        console.log("case days");
        console.log(this.similarItems);

        break;
      case this.filters.shipping: this.sortByShipping(this.order);
        this.orderDisabled = false;
        console.log("case shipping");
        console.log(this.similarItems);

        break;
      default: console.log("none");
      console.log(this.similarItems);


    }
  }

  orderChange=()=>{
    this.similarItems.reverse();
  }




// sorting Functions
  sortByName=(order)=>{
    if(order === "0"){
      this.similarItems.sort((a,b)=> (a.title> b.title)? 1: (a.title < b.title) ? -1: 0 );
    }else if (order === "1"){
      this.similarItems.sort((a,b)=> (a.title < b.title)? 1: (a.title > b.title) ? -1: 0 );
    }
  }
  sortByPrice=(order)=>{
      this.similarItems.sort((a,b)=> {
        let str: string = a.price.value;
        let num1 = parseInt(str.substring(str.lastIndexOf("$")+1));
        str = b.price.value;
        let num2 = parseInt(str.substring(str.lastIndexOf("$")+1));
        return this.sortHelper(num1, num2, order);
  });
}
  sortByDays=(order)=>{
    this.similarItems.sort((a,b)=>{
      let num1 = parseInt(a.daysLeft.value);
      let num2 = parseInt(b.daysLeft.value);
      return this.sortHelper(num1, num2, order);
    });
   
  }
  sortByShipping=(order)=>{
    this.similarItems.sort((a,b)=> {
      let str: string = a.shipping.value;
      let num1 = parseInt(str.substring(str.lastIndexOf("$")+1));
      str = b.shipping.value;
      let num2 = parseInt(str.substring(str.lastIndexOf("$")+1));
      return this.sortHelper(num1, num2, order);
    });
  }

  sortToOriginal=()=>{
    
    this.similarItems = this.originalItems.slice();
  }

  sortHelper=(num1, num2, order)=>{
    if(order === "0"){
      if(num1 > num2){
        return 1;
      } else if (num1 < num2){
        return -1;
      }
    }else if (order === "1"){
      if(num1 > num2){
        return -1;
      }else if (num1 < num2){
        return 1;
      }
    }
    return 0;
  }


}
