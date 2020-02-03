import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // Receiving data from parent eg. Results or Wishlist
  @Input() item; 
  
  // Output variables
  @Output() backToList = new EventEmitter();


  // Input data to children
  itemDetails;
  photos;
  shippingDetails;
  sellerDetails;
  similarItems;
  errorMessage;

  // Tab related variables
  tabs = {
    products: 0,
    photos: 1,
    shipping: 2,
    seller:3,
    similarProducts:4,
    progress: 5
  }
  currentTab;

  // Conditional Rendering
  similarItemsFound = true;

  ngOnInit() {
    this.goTo(this.tabs.progress); // showing progress tab;
    this.getItem(this.item.itemId); //Setting the itemDetails 
    this.getSimilarItems(this.item.itemId); //Setting the similarItems
    this.getImages(this.item.title); //Setting the photos onChange
    this.shippingDetails = this.item.shipping; //Setting the shippingDetails
    this.sellerDetails = this.item.seller; // Setting the sellerDetails
    // this.currentTab = this.tabs.products //Setting the current tab

  
  }
  

// TABS
activeTab = {}

getTabClass=(tab:string)=>{
  return this.activeTab[tab];
}
  

  goTo=(tab)=>{
    switch(tab){
      case this.tabs.progress: this.currentTab = this.tabs.progress; this.activeTab={'5':'btn-dark'} ;break;
      case this.tabs.products: this.currentTab = this.tabs.products;this.activeTab={'0':'btn-dark'} ;break;
      case this.tabs.photos: this.currentTab = this.tabs.photos;this.activeTab={'1':'btn-dark'} ;break;
      case this.tabs.shipping: this.currentTab = this.tabs.shipping;this.activeTab={'2':'btn-dark'} ;break;
      case this.tabs.seller: this.currentTab = this.tabs.seller;this.activeTab={'3':'btn-dark'} ;break;
      case this.tabs.similarProducts: this.currentTab = this.tabs.similarProducts;this.activeTab={'4':'btn-dark'} ;break;
    }
  }

  backToListClicked=()=>{
    console.log("back to list called from item.js")
    this.backToList.emit();
  } 

  

              // SERVER COMMUNICATION LOGIC

// get ItemDetails 
getItem=(itemId)=>{
  let url = "/getItem?itemId="+ itemId;

  this.http.get(url).subscribe((data)=>{
    this.itemDetails = data;
    this.goTo(this.tabs.products);
  });
  // this.itemDetails = this.sampleItemDetails; //TEST ONLY
}

// Get Similar Items
getSimilarItems=(itemId)=>{
  interface SimilarItems {
    ack: number;
    items: Array<Object>;
  }

  let url = "/getSimilarItems?itemId=" + itemId;
  this.http.get(url).subscribe((data:SimilarItems)=>{
    if(data.ack == 1){
      this.similarItems = data.items;
      this.similarItemsFound = true;
    }else{
      this.similarItemsFound = false;
      this.errorMessage = "No Similar Items Found"
    }
  });
  
  // delete this for productions
  // this.similarItems=this.sampleSimilarItems4.items;
}
// get Images for the item.
getImages=(title)=>{
  let url = "/getImages?title="+title;
  // this.photos = this.samplePhotos; //TEST ONLY
  this.http.get(url).subscribe((data)=>{this.photos=data})
}


postOnFacebook=()=>{
  let url = "https://www.facebook.com/dialog/share?app_id=785412368489899&display=popup"
  url+= "&href="+this.itemDetails.link+"&redirect_uri=http://localhost:4200";
  window.open(url, "_blank")
}




// WISHLIST FUNCTIONS
removeFromCart=()=>{
  let key = JSON.stringify(this.item.itemId);
  localStorage.removeItem(key);
  this.item.isInCart = false;
}

addToCart=()=>{
  console.log("ADD TO CART CALLED ", this.item)
  let key = JSON.stringify(this.item.itemId)
  localStorage.setItem(key, JSON.stringify(this.item))
  this.item.isInCart = true;
}





}
