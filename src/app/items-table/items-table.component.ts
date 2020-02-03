import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, animate, style , transition} from '@angular/animations';





@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css'],
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


export class ItemsTableComponent implements OnInit {

  constructor(private http: HttpClient) { }


  // This is where the information of the items is comming from
  @Input() items;
  
  // input to children
  @Input() item;

  @Output() itemSelected = new EventEmitter();

  // conditional views
  detailsDisabled = true;
  detailsShowing = false;
  itemsShowing = true;
  shouldAnimate = false;
  //local variables
  pages=[];
  pageItems;
  pagesFull;
  currentPage;
  numPages;
  errorMessage = "No Records Found";

  // control variables
  nextDisabled = false;
  prevDisabled = true;
  detailsBtnDisabled = true; //change this to true
  isItemsEmpty = true;
  highlightRow={}; 
  highlightPage={};
  
  ngOnInit() {
    if(this.items === "Failure"){
    
      this.isItemsEmpty=true;
      this.errorMessage = "No Records Found";
      return;
    }
    if(this.items != undefined){

      if(this.item != undefined){
        this.highlightRow = {[this.item.itemId]: "table-dark"};
        this.detailsBtnDisabled = false;
      }
      this.isItemsEmpty = false;
      this.checkInCart();
      this.shortenTitles();
      if(this.items.length % 10==0){
        this.numPages = this.items.length/10;
        this.pagesFull = true;
      }else{
        this.numPages = Math.floor(this.items.length/10) + 1;
        this.pagesFull = false;
      }
      this.pages = this.createPages()
      this.pageItems = this.pages[0];
      this.currentPage = 0;
      this.highlightPage={[this.currentPage]: "btn-dark"}
      if(this.pages.length <= 1){
        this.nextDisabled = true;
      }


    }else{
      this.isItemsEmpty = true;
      this.errorMessage = "Results Empty"
    }
  }


 


                  // ITEM CLICKED 
  sendItem=(item)=>{
    // console.log(item)
    this.highlightRow = {[item.itemId]: "table-dark"};
    this.item = item;
    this.itemsShowing = false;
    this.detailsShowing = true;
    this.detailsBtnDisabled = false;
    this.shouldAnimate = true;
    this.itemSelected.emit(item);
  }

  

  getClass=(itemId)=>{
    if(this.highlightRow[itemId]){
      return this.highlightRow[itemId];
    }else{
      return "";
    }
  }
                //Details Button Logic 
  goToDetails=()=>{
    this.shouldAnimate = true;
    this.itemsShowing=false;
    this.detailsShowing=true;
  }
  goToList=()=>{
    this.shouldAnimate=true;
    this.itemsShowing = true;
    this.detailsShowing = false;
  }


                   // PAGINATION LOGIC
  // creates an array of pages, each containing an array of items.
  createPages=()=>{
    if(!this.isItemsEmpty){
       let pages=[];
    let page=[];
    let itemIndex = 0;
    let itemsInLastPage = this.items.length % 10;
    let numberOfPages ;
    if(this.pagesFull){
      numberOfPages = this.numPages;
    }else{
      numberOfPages=this.numPages-1;
    }
    // console.log("items in last page :", itemsInLastPage)
    // filling the full pages
    for(let i = 0; i < numberOfPages; i++){
      for (let j=0; j < 10; j++){
        page.push(this.items[itemIndex])
        itemIndex++;
      }
      pages.push(page);
      page = [];
    }
    
    if(!this.pagesFull){
       for(let k = 0; k < itemsInLastPage; k++){
        page.push(this.items[itemIndex]);
        itemIndex++;
      }
      pages.push(page);
    }
    
    // console.log(pages)
    return pages;
    }
   
  }


  prevPage=()=>{

    this.currentPage -= 1;
    if(this.currentPage == 0){
      this.prevDisabled = true;
    }
    this.nextDisabled = false;
    this.highlightPage ={[this.currentPage]: "btn-dark"}
  }

  nextPage=()=>{
    this.currentPage += 1; 
    if(this.currentPage == (this.numPages-1)){
      this.nextDisabled = true;
    }
    this.prevDisabled = false;
    this.highlightPage ={[this.currentPage]: "btn-dark"}
  }

  goToPage=(i)=>{
    this.currentPage = i;

    if(this.currentPage == 0){
      this.prevDisabled = true;
    }else{
      this.prevDisabled = false;
    }

    if(this.currentPage == (this.numPages-1)){
      this.nextDisabled = true;
    }else{
      this.nextDisabled = false;
    }
    this.highlightPage ={[this.currentPage]: "btn-dark"}
  }

  getPageClass=(i)=>{
    if(this.highlightPage[i] != undefined){
        return this.highlightPage[i];
    }else{
      return "";
    }
  }


  // WISHLIST FUNCTIONS
removeFromCart=(myItem)=>{
  let key = JSON.stringify(myItem.itemId);
  localStorage.removeItem(key);
  myItem.isInCart = false;
}

addToCart=(item)=>{
  console.log(item)
  item.isInCart = true;
  let key = JSON.stringify(item.itemId)
  localStorage.setItem(key, JSON.stringify(item))
}


checkInCart=()=>{
  if(!this.isItemsEmpty){

    let id;
    for(let i=0; i<this.items.length; i++){
      id = JSON.stringify(this.items[i].itemId)
      if(localStorage.getItem(id) == null){
        this.items[i].isInCart = false;
      }else{
        this.items[i].isInCart = true;
      }
    }
  }
}



//Shortening titles of the items 
shortenTitles=()=>{
  if(!this.isItemsEmpty){
  // let titles = [];
  let items = this.items;
  let tempStr;
  let pos;
  for(let i =0; i< this.items.length; i++){
    if(items[i].title.length > 35){
      pos = items[i].title.lastIndexOf(" ", 35)
      tempStr = items[i].title.substring(0, pos);
      tempStr += "...";

      this.items[i].shortenedTitle = tempStr.slice()
      // titles.push(tempStr.slice());

    }
    else{
      this.items[i].shortenedTitle = items[i].title;
      // titles.push(items[i].title);
    }
  }

  // return titles;
}

}

  
}
