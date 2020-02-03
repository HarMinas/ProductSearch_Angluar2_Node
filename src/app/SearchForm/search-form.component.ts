import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormModel} from '../FormModel/form-model'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {



  constructor(private fb: FormBuilder, private http: HttpClient) { }

  // Getting the form Model
  formModel = new FormModel(10);
  // IP API endpoing 
  ipApi = 'http://ip-api.com/json/';

  // Server URL 

  

  // This is where the extracted data of the form is stored and sent to the app component. 
  @Output() itemsData = new EventEmitter(); //signals the the app-component that items are ready 
  @Output() loading = new EventEmitter();  //signal the app-component that the page should be loading 
  @Output() cleared = new EventEmitter();  //signals the app-component that the page needs to be reset.

  // Regular Variables
  myForm: FormGroup;
  submitDisabled: boolean = true;
  zipcode: number;
  userLocDisabled: boolean = true;
  currentLocation: string;


  options=[];

  ngOnInit() {
    this.myForm = this.fb.group({
      keyword: ['', [ 
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9]/)
      ]],
      category: '0', 
      new: false, used:false, unspecified:false,
      local:false, free: false,
      distance: 10,
      zip: "0",
      location: ['', [
        Validators.required, 
        Validators.pattern(/^[0-9]{5,5}$/)
      ]]
    });

    this.location.disable();

    // Getting Current Location
      interface IpData {
          zip: string;
      }
    this.http.get(this.ipApi).subscribe((data:IpData)=>{
        this.currentLocation = data.zip;

    });

    // this.myForm.valueChanges.subscribe(this.formValidation)
    this.myForm.statusChanges.subscribe(this.checkValidity)
    this.zip.valueChanges.subscribe(this.handleRadio)
    this.location.valueChanges.subscribe(this.getZipcodes)
    
  }

/* Getters for Form Elements */
  get keyword(){ return this.myForm.get("keyword");}
  get category(){return this.myForm.get("category");}
  get new(){return this.myForm.get("new");}
  get used(){return this.myForm.get("used");}
  get unspecified(){return this.myForm.get("unspecified");}
  get local(){return this.myForm.get("local");}
  get free(){return this.myForm.get("free");}
  get distance(){return this.myForm.get("distance");}
  get zip(){return this.myForm.get('zip');}
  get location(){return this.myForm.get('location');}




  
//Checks if the form is valid and activates the submit button.
checkValidity=()=>{
  const status = this.myForm.status;
  if(status=="VALID"){
    this.submitDisabled = false;
  }else{
    this.submitDisabled = true;
  }
}

//Handle Radio Button Change
handleRadio=()=>{
  if(this.zip.value === "1"){
    this.location.enable();
  }else{
    this.location.disable();
  }
}
// submitting Form - uses requestItems interanlly to send the 
submitForm = ()=>{
    // signal page loading 
    this.loading.emit();
    // get form data into the model
    this.formModel.keyword = this.keyword.value;
    this.formModel.category = this.category.value;
    this.formModel.new = this.new.value;
    this.formModel.used = this.used.value;
    this.formModel.unspecified = this.unspecified.value;
    this.formModel.local = this.local.value;
    this.formModel.free = this.free.value;
    this.formModel.distance =  this.distance.value;
    if(this.zip.value == "1"){
        this.formModel.location = this.location.value;
    }else{
      this.formModel.location = this.currentLocation;
    }
  
  // request the data and send items array to the app-component
  this.requestItems();
}



  // This method requests items and calls creates the table if there are results and shows message if no items are present.
requestItems=()=>{
    let request =  '/getItems';
    request += "?"
     //preparing submitInfo
     let keyword = this.formModel.keyword;

     request += "keyword="+keyword;
     request += "&category="+this.formModel.category;
     request += "&new="+this.formModel.new;
     request += "&used="+this.formModel.used;
     request += "&unspecified="+ this.formModel.unspecified;
     request += "&local="+this.formModel.local;
     request += "&free="+this.formModel.free;
     request += "&distance="+this.formModel.distance;
     request += "&zip="+this.formModel.location;

    this.itemsData.emit(request);
}

// AUTOCOMPLETE FEATURE 

getZipcodes=()=>{
  let url = "/getZipcodes?startsWith="+this.location.value;

  this.http.get(url).subscribe((data:string[])=>{
    this.options = data;
  })
}


// Clears the form and resets to original state. Also signal the parent about the clear event   
clearForm = ()=>{
  // Clear the form here
  this.myForm.reset();
  this.category.setValue("0");
  this.distance.setValue(10);
  this.zip.setValue('0');
  this.local.setValue(false);
  this.free.setValue(false);
  this.cleared.emit();
}





  

}
