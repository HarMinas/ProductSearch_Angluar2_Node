import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './SearchForm/search-form.component';
import { ItemsTableComponent } from './items-table/items-table.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './item/details/details.component';
import { SimilarComponent } from './item/similar/similar.component';
import { PhotosComponent } from './item/photos/photos.component';
import { ShippingComponent } from './item/shipping/shipping.component';
import { SellerComponent } from './item/seller/seller.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ItemsTableComponent,
    WishlistComponent,
    ItemComponent,
    DetailsComponent,
    SimilarComponent,
    PhotosComponent,
    ShippingComponent,
    SellerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RoundProgressModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
