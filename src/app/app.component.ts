import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, animate, style , transition} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent implements OnInit {

  
  
  constructor(private http: HttpClient){}






  //inputs to other components 
  items; // inputs the items data data to the item-table-component 
  resultsItem;
  wishlistItem;


  sections = {
      results: 0,
      progressBar: 1,
      wishlist: 2,
      none: 4
  }
  currentSection = this.sections.none;
  pastSection = this.sections.none;

  
  //CSS classes
  resultsButton="btn-dark";
  wishlistButton = "btn-light";

  ngOnInit(){
  } 

 



  //Upon receiving itemId of a single item, set the pastSection, go to item details section. 
  getItems = ($event)=>{
    // console.log("getItemsCalled")
    this.currentSection = this.sections.progressBar;
     this.http.get($event).subscribe((data)=>{
        this.items = data;
        this.currentSection = this.sections.results;
        this.pastSection = this.currentSection;
     });
    // this.items = this.sampleItems;
    // this.currentSection = this.sections.results;
  }

 


  // Clear everything
  clearForm=()=>{
    this.items = null;
    this.showSection(this.sections.none);
  }


  resultsItemSelected=($event)=>{
    this.resultsItem = $event;
  }
  wishlistItemSelected=($event)=>{
    this.wishlistItem =$event;
  }

  
// Toggle Section Functions
  goToResults=()=>{
    this.resultsButton="btn-dark";
    this.wishlistButton="btn-light";
    this.showSection(this.sections.results);
  }


  goToWishlist=()=>{
    this.resultsButton="btn-light";
    this.wishlistButton="btn-dark";
    this.showSection(this.sections.wishlist);
  }

  showSection=(section)=>{
    switch(section){
      case this.sections.results:
        this.currentSection = this.sections.results;
        break;
      case this.sections.progressBar:
        this.currentSection = this.sections.progressBar;
        break;
      case this.sections.wishlist:
        this.currentSection = this.sections.wishlist;
        break;
      default: this.currentSection = this.sections.none;
    }
  }







}
