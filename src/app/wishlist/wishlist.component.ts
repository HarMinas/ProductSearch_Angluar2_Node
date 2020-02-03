import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, animate, style , transition} from '@angular/animations';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  animations: [
    trigger('slideFromRight', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(1100%)'}))
      ])
    ])
  ]
})
export class WishlistComponent implements OnInit {

  constructor() { }
  // CONTAINERS
  items=[]; //items to be collected from the local storage 
  @Input() item; // item to be used for the details view.

  @Output() itemSelected = new EventEmitter();


  // conditionals
  detailsShowing = false;
  wishlistShowing = true;
  detailsBtnDisabled = true;
  wishlistEmpty = true;

  // VARIABLES
  errorMessage = "The wish list is empty"
  total: number;
  highlighRow ={};


  ngOnInit() {
    if(this.item != undefined){
      this.highlighRow={[this.item.itemId]: "table-dark"}
      this.detailsBtnDisabled = false;
    }
   this.getItems();
   this.shortenTitles()
  }



  sendItem=(item)=>{
    this.highlighRow={[item.itemId]: "table-dark"}
    this.item = item;
    this.wishlistShowing = false;
    this.detailsShowing = true;
    this.detailsBtnDisabled = false;
    this.itemSelected.emit(item);
  }

  getClass=(itemId)=>{
    if(this.highlighRow[itemId]){
      return this.highlighRow[itemId];
    }else{
      return "";
    }
  }

  goToDetails=()=>{
    this.detailsShowing=true;
    this.wishlistShowing= false;
  }

  // Switches to Items
  goToList=()=>{
    this.detailsShowing = false;
    this.wishlistShowing = true;
  }
  // Shortens the titles of the items to 32 characters long
  shortenTitles=()=>{
    let items = this.items;
    let tempStr;
    let pos;
    for(let i =0; i< this.items.length; i++){
      if(items[i].title.length > 35){
        pos = items[i].title.lastIndexOf(" ", 35)
        tempStr = items[i].title.substring(0, pos);
        tempStr += "...";
        this.items[i].shortenedTitle = tempStr.slice()

      }
      else{
        this.items[i].shortenedTitle = items[i].title;
      }
    }
  }

  getItems=()=>{
    this.items=[];//Reseting the items array
    this.total = 0; //Reseting the total;
    let price = '';
    
    let keys = Object.keys(localStorage);

    for(let i=0; i<localStorage.length; i++){
      this.items.push(JSON.parse(localStorage.getItem(keys[i])));
      price = JSON.parse(localStorage.getItem(keys[i])).price;
      price = price.slice(1);
      this.total += parseInt(price);
    }
    if(this.items.length != 0){
      this.wishlistEmpty = false;
    }else{
      this.wishlistEmpty = true;
    }
  }

  removeFromCart=(item)=>{
      let key = item.itemId;
      localStorage.removeItem(JSON.stringify(key));
      item.isInCart=false;
      this.getItems();
  }
}



// 