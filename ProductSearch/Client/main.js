(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/FormModel/form-model.ts":
/*!*****************************************!*\
  !*** ./src/app/FormModel/form-model.ts ***!
  \*****************************************/
/*! exports provided: FormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModel", function() { return FormModel; });
var FormModel = /** @class */ (function () {
    function FormModel(distance) {
        this.distance = distance;
    }
    return FormModel;
}());



/***/ }),

/***/ "./src/app/SearchForm/search-form.component.css":
/*!******************************************************!*\
  !*** ./src/app/SearchForm/search-form.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n/* title */\n.title{\n    margin: 2% 0;\n    padding: 2% 0;\n    text-align: center;\n    border-top: 1px solid #212121;\n    border-bottom: 1px solid #212121;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2VhcmNoRm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsVUFBVTtBQUNWO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGdDQUFnQzs7QUFFcEMiLCJmaWxlIjoic3JjL2FwcC9TZWFyY2hGb3JtL3NlYXJjaC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuLyogdGl0bGUgKi9cbi50aXRsZXtcbiAgICBtYXJnaW46IDIlIDA7XG4gICAgcGFkZGluZzogMiUgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMTIxMjE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMTIxMjE7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/SearchForm/search-form.component.html":
/*!*******************************************************!*\
  !*** ./src/app/SearchForm/search-form.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n    <form class=\"col-lg-8 col-md-8 col-12 m-auto bg-dark small p-0 pt-2 \"  [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\">\n        <p class=\"h3 m-4 top-bottom-border pt-2 pb-2 \"> Product Search</p>\n        <div class=\"col-lg-9 col-md-9 col-12 m-auto  p-0\">\n            <!-- KEYWORD -->\n            <div class=\"form-group row text-left\">\n                <label for=\"keyword\" class=\"col-lg-3 col-md-3  col-12 col-form-label h6\">keyword<span class=\"text-danger\">*</span></label>\n                <div class=\"col-lg-8 col-md-8 col-12 pl-0\">\n                    <input type=\"text\" class=\"form-control form-control \" name=\"keyword\" id=\"keyword\" \n                            formControlName=\"keyword\"\n                            [ngClass]=\"{'border border-danger' : keyword.invalid && keyword.touched}\"  placeholder=\"Enter Product Name (e.g. iPhone 8)\">\n                    <div *ngIf=\"keyword.touched && keyword.invalid\" class=\"text-danger text-left\">Please enter a keyword</div>\n                </div>\n            </div>\n            <!-- CATEGORY -->\n            <div class=\"form-group row text-left\">\n                <label for=\"category\" class=\"col-lg-3 col-md-3  col-12 col-form-label\">Category</label>\n                <select class=\"custom-select col-lg-3 col-md-3 col-12 form-control-sm\" formControlName=\"category\" >\n                        <option value=\"0\"> All Categories</option>\n                        <option value=\"550\">Art</option>\n                        <option value=\"2984\">Baby</option>\n                        <option value=\"267\">Books</option>\n                        <option value=\"11450\">Clothing, Shoes &Accessories</option>\n                        <option value=\"58058\">Computers/Tablets & Networking</option>\n                        <option value=\"26395\">Health & Beauty</option>\n                        <option value=\"11233\">Music</option>\n                        <option value=\"1249\">Video Games & Consoles</option>\n                </select>\n            </div>\n            <!-- CONDITION -->\n            <div class=\"form-group row text-left\">\n                <label for=\"condition\" class=\"col-lg-3 col-md-3 col-12 col-form-label\">Condition</label>\n                <div class=\"col-lg-8 col-md-8 col-12 pl-0\">\n                    <div class=\"form-check form-check-inline\">\n                        <input  formControlName=\"new\" type=\"checkbox\" class=\"form-check-input\" name=\"new\">\n                        <label  for=\"new\" class=\"form-check-label\">New</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                            <input  formControlName=\"used\" type=\"checkbox\" class=\"form-check-input\" name=\"used\">\n                            <label for=\"used\" class=\"form-check-label\">used</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                            <input  formControlName=\"unspecified\" type=\"checkbox\" class=\"form-check-input\" name=\"undefined\">\n                            <label for=\"unspecified\" class=\"form-check-label\">undefined</label>\n                    </div>\n                </div>\n            </div>\n            <!-- SHIPPING -->\n            <div class=\"form-group row text-left\">\n                <label for=\"category\" class=\"col-lg-3 col-md-3 col-12 col-form-label\">Shipping Options</label>\n                <div class=\"col-lg-8 col-md-8 col-12 pl-0\">\n                        <div class=\"form-check form-check-inline\">\n                        <input formControlName=\"local\" type=\"checkbox\" class=\"form-check-input\" name=\"local\">\n                        <label for=\"local\" class=\"form-check-label\">Local Pickup</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input formControlName=\"free\" type=\"checkbox\" class=\"form-check-input\" name=\"free\">\n                        <label for=\"free\" class=\"form-check-label\">Free Shipping</label>\n                    </div>  \n                </div>\n                            \n            </div>\n            <!-- DISTANCE -->\n            <div class=\"form-group row text-left\">\n                <label for=\"distance\" class=\"col-lg-3 col-md-3 col-12 col-form-label\">Distance (Miles)</label>\n                <div class=\"col-lg-8 col-md-8 col-12 pl-0\">\n                        <input formControlName=\"distance\"  type=\"text\" class=\"form-control form-control\" id=\"keyword\" value=\"10\" name=\"distance\">\n                </div>\n            </div>\n            <!-- FROM -->\n            <div class=\"form-group row text-left\">\n                <label for=\"distance\" class=\"col-lg-3 col-md-3 col-12 col-form-label\">From<span class=\"text-danger\">*</span></label>\n                <div class=\"col-lg-8 col-md-8 col-12 pl-0\">\n                    <div class=\"custom-control custom-radio\">\n                        <input formControlName=\"zip\" type=\"radio\" id=\"customRadio1\" name=\"zip\" class=\"custom-control-input\" value = \"0\">\n                        <label class=\"custom-control-label\" for=\"customRadio1\">Current Location</label>\n                    </div>\n                    <div class=\"custom-control custom-radio\">\n                        <input formControlName=\"zip\" type=\"radio\" id=\"customRadio2\" name=\"zip\" class=\"custom-control-input\" value=\"1\">\n                        <label class=\"custom-control-label\" for=\"customRadio2\">Other. Please specify zip code:</label>\n                    </div>\n                    <input  matInput [ngClass]=\"{'border border-danger' : ((location.value=='') && (location.touched))}\"\n                            formControlName=\"location\"  aria-label=\"Number\"  [matAutocomplete]=\"auto\" type=\"text\" class=\"form-control form-control\" id=\"zip\"  name=\"zip\">\n\n\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                    {{option}}\n                    </mat-option>\n                </mat-autocomplete>\n                    \n                    <div *ngIf=\"location.touched && (location.value=='')\" class=\"text-danger text-left\">Please enter a zipcode</div>\n\n                </div>\n            </div>\n            <!-- BUTTONS -->\n            <div class=\"form-group row p-3 text-left\">\n                    <button type=\"submit\" [disabled]=\"submitDisabled\" class=\"btn btn-light  mr-3\"  > <i class=\"material-icons align-bottom\">search</i>Search</button>\n                    <button type=\"button\" class=\"btn btn-light\" (click)=\"clearForm()\" > <i class=\"material-icons align-bottom\">clear_all</i> Clear</button>\n            </div>\n        </div>\n       \n\n    \n      \n\n    </form> \n\n\n\n\n\n    \n  \n\n        \n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/SearchForm/search-form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/SearchForm/search-form.component.ts ***!
  \*****************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _FormModel_form_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormModel/form-model */ "./src/app/FormModel/form-model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(fb, http) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        // Getting the form Model
        this.formModel = new _FormModel_form_model__WEBPACK_IMPORTED_MODULE_3__["FormModel"](10);
        // IP API endpoing 
        this.ipApi = 'http://ip-api.com/json/';
        // Server URL 
        // This is where the extracted data of the form is stored and sent to the app component. 
        this.itemsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //signals the the app-component that items are ready 
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //signal the app-component that the page should be loading 
        this.cleared = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //signals the app-component that the page needs to be reset.
        this.submitDisabled = true;
        this.userLocDisabled = true;
        this.options = [];
        //Checks if the form is valid and activates the submit button.
        this.checkValidity = function () {
            var status = _this.myForm.status;
            if (status == "VALID") {
                _this.submitDisabled = false;
            }
            else {
                _this.submitDisabled = true;
            }
        };
        //Handle Radio Button Change
        this.handleRadio = function () {
            if (_this.zip.value === "1") {
                _this.location.enable();
            }
            else {
                _this.location.disable();
            }
        };
        // submitting Form - uses requestItems interanlly to send the 
        this.submitForm = function () {
            // signal page loading 
            _this.loading.emit();
            // get form data into the model
            _this.formModel.keyword = _this.keyword.value;
            _this.formModel.category = _this.category.value;
            _this.formModel.new = _this.new.value;
            _this.formModel.used = _this.used.value;
            _this.formModel.unspecified = _this.unspecified.value;
            _this.formModel.local = _this.local.value;
            _this.formModel.free = _this.free.value;
            _this.formModel.distance = _this.distance.value;
            if (_this.zip.value == "1") {
                _this.formModel.location = _this.location.value;
            }
            else {
                _this.formModel.location = _this.currentLocation;
            }
            // request the data and send items array to the app-component
            _this.requestItems();
        };
        // This method requests items and calls creates the table if there are results and shows message if no items are present.
        this.requestItems = function () {
            var request = '/getItems';
            request += "?";
            //preparing submitInfo
            var keyword = _this.formModel.keyword;
            request += "keyword=" + keyword;
            request += "&category=" + _this.formModel.category;
            request += "&new=" + _this.formModel.new;
            request += "&used=" + _this.formModel.used;
            request += "&unspecified=" + _this.formModel.unspecified;
            request += "&local=" + _this.formModel.local;
            request += "&free=" + _this.formModel.free;
            request += "&distance=" + _this.formModel.distance;
            request += "&zip=" + _this.formModel.location;
            _this.itemsData.emit(request);
        };
        // AUTOCOMPLETE FEATURE 
        this.getZipcodes = function () {
            var url = "/getZipcodes?startsWith=" + _this.location.value;
            _this.http.get(url).subscribe(function (data) {
                _this.options = data;
            });
        };
        // Clears the form and resets to original state. Also signal the parent about the clear event   
        this.clearForm = function () {
            // Clear the form here
            _this.myForm.reset();
            _this.category.setValue("0");
            _this.distance.setValue(10);
            _this.zip.setValue('0');
            _this.local.setValue(false);
            _this.free.setValue(false);
            _this.cleared.emit();
        };
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.fb.group({
            keyword: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z0-9]/)
                ]],
            category: '0',
            new: false, used: false, unspecified: false,
            local: false, free: false,
            distance: 10,
            zip: "0",
            location: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]{5,5}$/)
                ]]
        });
        this.location.disable();
        this.http.get(this.ipApi).subscribe(function (data) {
            _this.currentLocation = data.zip;
        });
        // this.myForm.valueChanges.subscribe(this.formValidation)
        this.myForm.statusChanges.subscribe(this.checkValidity);
        this.zip.valueChanges.subscribe(this.handleRadio);
        this.location.valueChanges.subscribe(this.getZipcodes);
    };
    Object.defineProperty(SearchFormComponent.prototype, "keyword", {
        /* Getters for Form Elements */
        get: function () { return this.myForm.get("keyword"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "category", {
        get: function () { return this.myForm.get("category"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "new", {
        get: function () { return this.myForm.get("new"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "used", {
        get: function () { return this.myForm.get("used"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "unspecified", {
        get: function () { return this.myForm.get("unspecified"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "local", {
        get: function () { return this.myForm.get("local"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "free", {
        get: function () { return this.myForm.get("free"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "distance", {
        get: function () { return this.myForm.get("distance"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "zip", {
        get: function () { return this.myForm.get('zip'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchFormComponent.prototype, "location", {
        get: function () { return this.myForm.get('location'); },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFormComponent.prototype, "itemsData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFormComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchFormComponent.prototype, "cleared", void 0);
    SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/SearchForm/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/SearchForm/search-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.search-form-container{\n\n    margin: 10% auto 5% auto;\n    background-color: #292929;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2VhcmNoLWZvcm0tY29udGFpbmVye1xuXG4gICAgbWFyZ2luOiAxMCUgYXV0byA1JSBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n\n\n\n\n<div class=\"container-fluid \" >\n\n        \n     \n  <!-- FORM -->\n  <div class=\"row\">\n    <div class=\"col-12 p-0 text-center mt-5 text-light\">\n        <search-form (itemsData)=\"getItems($event)\" (cleared)=\"clearForm()\"> </search-form>\n    </div>\n  </div>\n\n  <!-- RESULTS AND WISHLIST BUTTONS -->\n  <div class=\"row\">\n    <div class=\"col-12  m-auto  text-center\">\n        <button type=\"button \" class=\"btn btn-sm mr-1\" [ngClass]=\"resultsButton\" (click)=\"goToResults()\">Results</button>\n        <button type=\"button\" class=\"btn btn-sm \" [ngClass]=\"wishlistButton\" (click)=\"goToWishlist()\">Wishlist</button>\n    </div>\n  </div>\n\n\n<!-- CONTENT SECTION -->\n  <div class=\"row\" [ngSwitch]= \"currentSection\">\n      <!-- PROGRESS BAR -->\n      <div *ngSwitchCase = \"sections.progressBar\" class=\"col-12 mt-4 \">\n          <div class=\"progress col-lg-8 col-md-8 col-12 m-auto\">\n              <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n      </div>\n      <!-- Results -->\n      <div class=\"col-12 text-center mt-4\" *ngSwitchCase = \"sections.results\" >\n            <app-items-table [items]=\"items\" [item]=\"resultsItem\" (itemSelected)=\"resultsItemSelected($event)\"> \n            </app-items-table>\n      </div>\n      <!-- WishList-Table -->\n      <div class=\"col-12 text-center mt-4\" *ngSwitchCase = \"sections.wishlist\" >\n        <app-wishlist (removeFromCart)=\"removeFromCart($event)\" [item]=\"wishlistItem\" (itemSelected)=\"wishlistItemSelected($event)\"></app-wishlist>\n      </div>\n  </div>\n</div>\n\n     \n  \n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.sections = {
            results: 0,
            progressBar: 1,
            wishlist: 2,
            none: 4
        };
        this.currentSection = this.sections.none;
        this.pastSection = this.sections.none;
        //CSS classes
        this.resultsButton = "btn-dark";
        this.wishlistButton = "btn-light";
        //Upon receiving itemId of a single item, set the pastSection, go to item details section. 
        this.getItems = function ($event) {
            // console.log("getItemsCalled")
            _this.currentSection = _this.sections.progressBar;
            _this.http.get($event).subscribe(function (data) {
                _this.items = data;
                _this.currentSection = _this.sections.results;
                _this.pastSection = _this.currentSection;
            });
            // this.items = this.sampleItems;
            // this.currentSection = this.sections.results;
        };
        // Clear everything
        this.clearForm = function () {
            _this.items = null;
            _this.showSection(_this.sections.none);
        };
        this.resultsItemSelected = function ($event) {
            _this.resultsItem = $event;
        };
        this.wishlistItemSelected = function ($event) {
            _this.wishlistItem = $event;
        };
        // Toggle Section Functions
        this.goToResults = function () {
            _this.resultsButton = "btn-dark";
            _this.wishlistButton = "btn-light";
            _this.showSection(_this.sections.results);
        };
        this.goToWishlist = function () {
            _this.resultsButton = "btn-light";
            _this.wishlistButton = "btn-dark";
            _this.showSection(_this.sections.wishlist);
        };
        this.showSection = function (section) {
            switch (section) {
                case _this.sections.results:
                    _this.currentSection = _this.sections.results;
                    break;
                case _this.sections.progressBar:
                    _this.currentSection = _this.sections.progressBar;
                    break;
                case _this.sections.wishlist:
                    _this.currentSection = _this.sections.wishlist;
                    break;
                default: _this.currentSection = _this.sections.none;
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _SearchForm_search_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchForm/search-form.component */ "./src/app/SearchForm/search-form.component.ts");
/* harmony import */ var _items_table_items_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items-table/items-table.component */ "./src/app/items-table/items-table.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _item_details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./item/details/details.component */ "./src/app/item/details/details.component.ts");
/* harmony import */ var _item_similar_similar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item/similar/similar.component */ "./src/app/item/similar/similar.component.ts");
/* harmony import */ var _item_photos_photos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item/photos/photos.component */ "./src/app/item/photos/photos.component.ts");
/* harmony import */ var _item_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./item/shipping/shipping.component */ "./src/app/item/shipping/shipping.component.ts");
/* harmony import */ var _item_seller_seller_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./item/seller/seller.component */ "./src/app/item/seller/seller.component.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _SearchForm_search_form_component__WEBPACK_IMPORTED_MODULE_8__["SearchFormComponent"],
                _items_table_items_table_component__WEBPACK_IMPORTED_MODULE_9__["ItemsTableComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_11__["ItemComponent"],
                _item_details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
                _item_similar_similar_component__WEBPACK_IMPORTED_MODULE_13__["SimilarComponent"],
                _item_photos_photos_component__WEBPACK_IMPORTED_MODULE_14__["PhotosComponent"],
                _item_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_15__["ShippingComponent"],
                _item_seller_seller_component__WEBPACK_IMPORTED_MODULE_16__["SellerComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_17__["RoundProgressModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" role=\"alert\">\n  {{message}}\n</div>"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorComponent.prototype, "message", void 0);
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/item/details/details.component.css":
/*!****************************************************!*\
  !*** ./src/app/item/details/details.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/item/details/details.component.html":
/*!*****************************************************!*\
  !*** ./src/app/item/details/details.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<table class=\"table table-striped table-dark\" >\n\n    <tbody>\n      \n      <tr>\n        <th> {{pictures.name}}</th>\n        <td>\n\n          \n          <!-- Button trigger modal -->\n          <a  class=\"text-decoration-none text-info\" data-toggle=\"modal\" data-target=\"#myModal\">  \n              View Product Images Here\n          </a>\n\n          <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\">\n                  <div class=\"modal-content text-dark\">\n                      <div class=\"modal-header\">\n                          <h5 class=\"modal-title\">{{pictures.name}}</h5>\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                      </div>\n                      <div class=\"modal-body\">\n                          <!-- Indicators -->\n                          <div class=\"carousel slide\" id=\"MyCarousel\">                            \n                              <!-- Wrapper for slides -->\n                            <div class=\"carousel-inner\">\n                                  <div class=\"carousel-item active\" >\n                                      <img src= {{pictures.value[0]}} class=\"d-block w-100 img-fluid picture-border\" alt=\"...\" (click)=\"openTab(picture)\">\n                                    </div>\n                                  <div *ngFor=\"let picture of pictures.value | slice:1\" class=\"carousel-item\" >\n                                    <img src= {{picture}} class=\"d-block w-100 img-fluid picture-border\" alt=\"...\" (click)=\"openTab(picture)\">\n                                  </div>\n                                </div>\n                                <!-- Previous -->\n                                <a class=\"carousel-control-prev\" href=\"#MyCarousel\" role=\"button\" data-slide=\"prev\">\n                                  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                                  <span class=\"sr-only\">Previous</span>\n                                </a>\n                                <!-- NEXT -->\n                                <a class=\"carousel-control-next\" href=\"#MyCarousel\" role=\"button\" data-slide=\"next\">\n                                  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                                  <span class=\"sr-only\">Next</span>\n                                </a>\n                          </div>\n                      </div>\n                      <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n                              Close\n                          </button>\n                          <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n                      </div>\n                  </div><!-- /.modal-content -->\n              </div><!-- /.modal-dialog -->\n                \n           \n          </div>    \n                        \n\n                \n        </td>\n\n      </tr>\n      <tr *ngFor=\"let detail of specs\"> \n        <th scope=\"row\">{{detail.Name}}</th>\n        <td>    \n          {{detail.Value[0]}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n\n"

/***/ }),

/***/ "./src/app/item/details/details.component.ts":
/*!***************************************************!*\
  !*** ./src/app/item/details/details.component.ts ***!
  \***************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.title = this.itemDetails.title;
        this.pictures = this.itemDetails.pictures;
        this.specs = this.itemDetails.itemDetails;
    };
    // Open the picture in a new tab
    DetailsComponent.prototype.openTab = function (path) {
        window.open(path, "_blank");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailsComponent.prototype, "itemDetails", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/item/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/item/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Item Title -->\n<div class=\"row\">\n  <div class=\"col text-center h3 p-4\">\n      {{item.title}}\n  </div>\n</div>\n<!-- List, Facebook, and addToCart Buttons -->\n<div class=\"row\">\n      <div class=\" col-6 text-left\">\n          <button class=\"btn btn-light\" (click)=\"backToListClicked()\">\n            <i class=\"material-icons align-bottom\">keyboard_arrow_left</i>\n            List</button>\n      </div>\n      <div class=\"col-6 text-right\">\n        <button class=\"btn\" (click)=\"postOnFacebook()\"><img src=\"http://csci571.com/hw/hw8/Images/facebook.png\" alt=\"\" width=\"50px\"></button>\n        <button *ngIf=\"item.isInCart\" class=\"btn \" (click)=\"removeFromCart()\">\n          <i class=\"material-icons text-warning h1\"> remove_shopping_cart</i>\n        </button>\n        <button *ngIf=\"!item.isInCart\" class=\"btn\" (click)=\"addToCart()\">\n          <i class=\"material-icons h1\"> add_shopping_cart</i>\n        </button>\n\n      </div>\n</div>\n\n\n\n<!-- Tabs - products,photos, shipping, seller, similar -->\n<ul class=\"nav nav-tabs justify-content-end mb-4\">\n    <li class=\"nav-item\" [ngClass]=\"getTabClass('0')\">\n        <a class=\"nav-link \" (click)=\"goTo(tabs.products)\">Products</a>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"getTabClass('1')\">\n        <a class=\"nav-link \" (click)=\"goTo(tabs.photos)\">Photos</a>\n\n        <!-- <button type=\"button\" class=\"btn\" (click)=\"goTo(tabs.photos)\">Photos</button> -->\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"getTabClass('2')\">\n        <a class=\"nav-link \" (click)=\"goTo(tabs.shipping)\">Shipping</a>\n\n        <!-- <button type=\"button\" class=\"btn\" (click)=\"goTo(tabs.shipping)\">Shipping</button> -->\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"getTabClass('3')\">\n        <a class=\"nav-link \" (click)=\"goTo(tabs.seller)\">Seller</a>\n        <!-- <button type=\"button\" class=\"btn\" (click)=\"goTo(tabs.seller)\">Seller</button> -->\n    </li>\n    <li class=\"nav-item show-desktop\" [ngClass]=\"getTabClass('4')\">\n        <a class=\"nav-link \" (click)=\"goTo(tabs.similarProducts)\">Similar Products</a>\n    </li>\n    <li class=\"nav-item show-mobile\" [ngClass]=\"getTabClass('4')\">\n        <a class=\"nav-link\" (click)=\"goTo(tabs.similarProducts)\">Related</a>\n    </li>\n\n  </ul>\n\n<!-- Below section to switch  -->\n<div [ngSwitch]=\"currentTab\">\n  <!-- Progress -->\n  <div *ngSwitchCase=\"tabs.progress\">  </div>\n  <!-- Products -->\n  <div *ngSwitchCase=\"tabs.products\" class=\"row\">\n    <div class=\"col\">\n        <app-details [itemDetails]=\"itemDetails\"></app-details>\n    </div>  \n   </div>\n  <!-- Photos -->\n  <div *ngSwitchCase=\"tabs.photos\" class=\"row\">\n    <app-photos [photos]=\"photos\"></app-photos>\n  </div>\n  <!-- Shipping -->\n  <div *ngSwitchCase=\"tabs.shipping\" class=\"row\">\n    <div class=\"col\">\n        <app-shipping [shippingDetails]=\"shippingDetails\"></app-shipping>\n    </div>\n   </div>\n  <!-- Seller -->\n  <div *ngSwitchCase=\"tabs.seller\" class=\"row\">  \n    <div class=\"col\">\n        <app-seller [sellerDetails]=\"sellerDetails\"> </app-seller>\n    </div>   \n  </div>\n  <!-- SimilarPrducts -->\n  <div *ngSwitchCase=\"tabs.similarProducts\" class=\"row\"> \n      <app-similar *ngIf=\"similarItemsFound\" [similarItems]=\"similarItems\"> </app-similar>\n      <app-error *ngIf=\"!similarItemsFound\" [message] = \"errorMessage\"></app-error>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ItemComponent = /** @class */ (function () {
    function ItemComponent(http) {
        var _this = this;
        this.http = http;
        // Output variables
        this.backToList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Tab related variables
        this.tabs = {
            products: 0,
            photos: 1,
            shipping: 2,
            seller: 3,
            similarProducts: 4,
            progress: 5
        };
        // Conditional Rendering
        this.similarItemsFound = true;
        // TABS
        this.activeTab = {};
        this.getTabClass = function (tab) {
            return _this.activeTab[tab];
        };
        this.goTo = function (tab) {
            switch (tab) {
                case _this.tabs.progress:
                    _this.currentTab = _this.tabs.progress;
                    _this.activeTab = { '5': 'btn-dark' };
                    break;
                case _this.tabs.products:
                    _this.currentTab = _this.tabs.products;
                    _this.activeTab = { '0': 'btn-dark' };
                    break;
                case _this.tabs.photos:
                    _this.currentTab = _this.tabs.photos;
                    _this.activeTab = { '1': 'btn-dark' };
                    break;
                case _this.tabs.shipping:
                    _this.currentTab = _this.tabs.shipping;
                    _this.activeTab = { '2': 'btn-dark' };
                    break;
                case _this.tabs.seller:
                    _this.currentTab = _this.tabs.seller;
                    _this.activeTab = { '3': 'btn-dark' };
                    break;
                case _this.tabs.similarProducts:
                    _this.currentTab = _this.tabs.similarProducts;
                    _this.activeTab = { '4': 'btn-dark' };
                    break;
            }
        };
        this.backToListClicked = function () {
            console.log("back to list called from item.js");
            _this.backToList.emit();
        };
        // SERVER COMMUNICATION LOGIC
        // get ItemDetails 
        this.getItem = function (itemId) {
            var url = "/getItem?itemId=" + itemId;
            _this.http.get(url).subscribe(function (data) {
                _this.itemDetails = data;
                _this.goTo(_this.tabs.products);
            });
            // this.itemDetails = this.sampleItemDetails; //TEST ONLY
        };
        // Get Similar Items
        this.getSimilarItems = function (itemId) {
            var url = "/getSimilarItems?itemId=" + itemId;
            _this.http.get(url).subscribe(function (data) {
                if (data.ack == 1) {
                    _this.similarItems = data.items;
                    _this.similarItemsFound = true;
                }
                else {
                    _this.similarItemsFound = false;
                    _this.errorMessage = "No Similar Items Found";
                }
            });
            // delete this for productions
            // this.similarItems=this.sampleSimilarItems4.items;
        };
        // get Images for the item.
        this.getImages = function (title) {
            var url = "/getImages?title=" + title;
            // this.photos = this.samplePhotos; //TEST ONLY
            _this.http.get(url).subscribe(function (data) { _this.photos = data; });
        };
        this.postOnFacebook = function () {
            var url = "https://www.facebook.com/dialog/share?app_id=785412368489899&display=popup";
            url += "&href=" + _this.itemDetails.link + "&redirect_uri=http://localhost:4200";
            window.open(url, "_blank");
        };
        // WISHLIST FUNCTIONS
        this.removeFromCart = function () {
            var key = JSON.stringify(_this.item.itemId);
            localStorage.removeItem(key);
            _this.item.isInCart = false;
        };
        this.addToCart = function () {
            console.log("ADD TO CART CALLED ", _this.item);
            var key = JSON.stringify(_this.item.itemId);
            localStorage.setItem(key, JSON.stringify(_this.item));
            _this.item.isInCart = true;
        };
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.goTo(this.tabs.progress); // showing progress tab;
        this.getItem(this.item.itemId); //Setting the itemDetails 
        this.getSimilarItems(this.item.itemId); //Setting the similarItems
        this.getImages(this.item.title); //Setting the photos onChange
        this.shippingDetails = this.item.shipping; //Setting the shippingDetails
        this.sellerDetails = this.item.seller; // Setting the sellerDetails
        // this.currentTab = this.tabs.products //Setting the current tab
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "backToList", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/item/photos/photos.component.css":
/*!**************************************************!*\
  !*** ./src/app/item/photos/photos.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item/photos/photos.component.html":
/*!***************************************************!*\
  !*** ./src/app/item/photos/photos.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-12 col-lg-4 col-md-4 p-2\">\n    <img src={{photos[0]}} class=\"img-fluid picture-border m-1\" alt=\"\" (click)=\"openInTab(photos[0])\">\n    <img src={{photos[1]}} class=\"img-fluid picture-border m-1 \" alt=\"\" (click)=\"openInTab(photos[1])\">\n  </div>\n  <div class=\"col-12 col-lg-4 col-md-4 p-2\">\n    <img src={{photos[2]}} class=\"img-fluid picture-border m-1\" alt=\"\" (click)=\"openInTab(photos[2])\">\n    <img src={{photos[3]}} class=\"img-fluid picture-border m-1 \" alt=\"\" (click)=\"openInTab(photos[3])\">\n    <img src={{photos[4]}} class=\"img-fluid picture-border m-1 \" alt=\"\" (click)=\"openInTab(photos[4])\">\n  </div>\n  <div class=\"col-12 col-lg-4 col-md-4 p-2\">\n    <img src={{photos[5]}} class=\"img-fluid picture-border m-1\" alt=\"\" (click)=\"openInTab(photos[5])\">\n    <img src={{photos[6]}} class=\"img-fluid picture-border m-1\" alt=\"\" (click)=\"openInTab(photos[6])\">\n    <img src={{photos[7]}} class=\"img-fluid picture-border m-1\" alt=\"\" (click)=\"openInTab(photos[7])\">\n  </div>\n</div>\n<!-- <div>HELLO PHOTOS</div> -->\n\n<!-- <img *ngFor=\"let photo of photos \" src={{photo}} alt=\"\"> -->\n\n"

/***/ }),

/***/ "./src/app/item/photos/photos.component.ts":
/*!*************************************************!*\
  !*** ./src/app/item/photos/photos.component.ts ***!
  \*************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotosComponent = /** @class */ (function () {
    function PhotosComponent() {
        this.openInTab = function (url) {
            window.open(url, "_blank");
        };
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotosComponent.prototype, "photos", void 0);
    PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/item/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/item/photos/photos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/item/seller/seller.component.css":
/*!**************************************************!*\
  !*** ./src/app/item/seller/seller.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vc2VsbGVyL3NlbGxlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/item/seller/seller.component.html":
/*!***************************************************!*\
  !*** ./src/app/item/seller/seller.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <table class=\"table table-striped table-dark text-left\">\n     \n      <thead>\n          <tr>  \n              <th>\n                <div style=\"transform: translateX(50%)\">\n                    {{sellerDetails.username.value}}\n                </div>\n              </th>\n            </tr>\n      </thead>\n    \n        <tbody>\n            \n          <tr *ngIf=\"sellerDetails.feedbackScore\" >\n            <th scope=\"row\">{{sellerDetails.feedbackScore.name}}</th>\n            <td >{{sellerDetails.feedbackScore.value}}</td>\n          </tr>\n          <tr *ngIf=\"sellerDetails.popularity\" >\n              <th scope=\"row\">{{sellerDetails.popularity.name}}</th>\n              <td >\n                <div class=\"position-relative\">\n                  <div class=\"circle-inner-text\">{{sellerDetails.popularity.value}}</div>\n                  <round-progress \n                  [current]=\"sellerPopularity\"\n                  [max]=\"maxPopularity\"\n                  [color]=\"color\"\n                  [background]=\"bgColor\"\n                  [radius]=\"radius\"\n                  [stroke]=\"1\"\n                  [semicircle]=\"false\"\n                  [rounded]=\"true\"\n                  [clockwise]=\"false\"\n                  [responsive]=\"false\"\n                  >\n                </round-progress>\n\n                </div>\n          \n             </td>\n            </tr>\n    \n    \n          <tr *ngIf=\"sellerDetails.feedbackStars\">\n              <th scope=\"row\" >{{sellerDetails.feedbackStars.name}}</th>\n              <td *ngIf=\"!highScore\" [ngStyle]=\"{'color': sellerDetails.feedbackStars.value}\"><i class=\"material-icons\">star_border</i></td>\n              <td *ngIf=\"highScore\"  [ngStyle]=\"{'color': 'yellow'}\"><i class=\"material-icons\">stars</i></td>\n    \n          </tr>\n    \n          <tr *ngIf=\"sellerDetails.topRated\">\n              <th scope=\"row\" >{{sellerDetails.topRated.name}}</th>\n              <td > \n                <i *ngIf=\"topRated\" class=\"material-icons text-success\"> done</i>\n                <i *ngIf=\"!topRated\" class=\"material-icons text-danger\"> close</i>\n              </td>\n          </tr>\n    \n          <tr *ngIf=\"sellerDetails.storeName\">\n              <th scope=\"row\">{{sellerDetails.storeName.name}}</th>\n              <td >{{sellerDetails.storeName.value}}</td>\n          </tr>\n    \n           <!-- Add the link Here  -->\n          <tr *ngIf=\"sellerDetails.storeURL\">\n              <th scope=\"row\" >{{sellerDetails.storeURL.name}}</th>\n              <td > <a class=\"text-info\" href={{sellerDetails.storeURL.name}}>Store</a></td>\n          </tr>\n    \n        </tbody>\n      </table>\n    \n\n\n      "

/***/ }),

/***/ "./src/app/item/seller/seller.component.ts":
/*!*************************************************!*\
  !*** ./src/app/item/seller/seller.component.ts ***!
  \*************************************************/
/*! exports provided: SellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerComponent", function() { return SellerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SellerComponent = /** @class */ (function () {
    function SellerComponent() {
        //instance fields
        this.radius = 25;
        this.color = '#28a745'; //success green
        this.bgColor = '#ffffff'; //white
        this.maxPopularity = 100;
    }
    SellerComponent.prototype.ngOnInit = function () {
        this.topRated = this.sellerDetails.topRated.value;
        this.feedbackScore = parseInt(this.sellerDetails.feedbackScore.value);
        if (this.feedbackScore > 10000) {
            this.highScore = true;
        }
        else {
            this.highScore = false;
        }
        this.sellerPopularity = this.sellerDetails.popularity.value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SellerComponent.prototype, "sellerDetails", void 0);
    SellerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seller',
            template: __webpack_require__(/*! ./seller.component.html */ "./src/app/item/seller/seller.component.html"),
            styles: [__webpack_require__(/*! ./seller.component.css */ "./src/app/item/seller/seller.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SellerComponent);
    return SellerComponent;
}());



/***/ }),

/***/ "./src/app/item/shipping/shipping.component.css":
/*!******************************************************!*\
  !*** ./src/app/item/shipping/shipping.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vc2hpcHBpbmcvc2hpcHBpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/item/shipping/shipping.component.html":
/*!*******************************************************!*\
  !*** ./src/app/item/shipping/shipping.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<table class=\"table table-striped table-dark\" >\n    <tbody>\n      <tr *ngIf=\"shippingDetails.cost\">\n        <th scope=\"row\">{{shippingDetails.cost.name}}</th>\n        <td>{{shippingDetails.cost.value}}</td>\n      </tr>\n      <tr *ngIf=\"shippingDetails.toLocations\">\n          <th scope=\"row\">{{shippingDetails.toLocations.name}}</th>\n          <td>{{shippingDetails.toLocations.value}}</td>\n      </tr>\n      <tr *ngIf=\"shippingDetails.handling\">\n          <th scope=\"row\">{{shippingDetails.handling.name}}</th>\n          <td>{{shippingDetails.handling.value}}</td>\n      </tr>\n      <!--  replace value with checkmarks checkmarks -->\n      <tr *ngIf=\"shippingDetails.expedited\">\n          <th scope=\"row\">{{shippingDetails.expedited.name}}</th>\n          <td *ngIf=\"expedited\"><i class=\"material-icons text-success\">done</i></td>\n          <td *ngIf=\"!expedited\"><i class=\"material-icons text-danger\">close</i></td>\n      </tr>\n      <tr *ngIf=\"shippingDetails.oneDay\">\n          <th scope=\"row\">{{shippingDetails.oneDay.name}}</th>\n          <td *ngIf=\"oneDay\"><i class=\"material-icons text-success\">done</i></td>\n          <td *ngIf=\"!oneDay\"><i class=\"material-icons text-danger\">close</i></td>\n      </tr>\n      <tr *ngIf=\"shippingDetails.returnAccepted\">\n          <th scope=\"row\">{{shippingDetails.returnAccepted.name}}</th>\n          <td *ngIf=\"returnsAccepted\"><i class=\"material-icons text-success\">done</i></td>\n          <td *ngIf=\"!returnsAccepted\"><i class=\"material-icons text-danger\">close</i></td>\n      </tr>\n    \n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/item/shipping/shipping.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/item/shipping/shipping.component.ts ***!
  \*****************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShippingComponent = /** @class */ (function () {
    function ShippingComponent() {
    }
    ShippingComponent.prototype.ngOnInit = function () {
        this.expedited = this.shippingDetails.expedited.value;
        this.oneDay = this.shippingDetails.oneDay.value;
        this.returnsAccepted = this.shippingDetails.returnAccepted.value;
        console.log(this.shippingDetails);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShippingComponent.prototype, "shippingDetails", void 0);
    ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! ./shipping.component.html */ "./src/app/item/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/item/shipping/shipping.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/item/similar/similar.component.css":
/*!****************************************************!*\
  !*** ./src/app/item/similar/similar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vc2ltaWxhci9zaW1pbGFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/item/similar/similar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/item/similar/similar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- The two dropdowns -->\n<div class=\"mb-2 text-left\">\n    <select [(ngModel)]=\"filter\" (change)=\"filterChange()\" class=\"custom-select col-lg-3 col-md-3 col-12 form-control-sm ml-3\" id=\"inputGroupSelect01\" class=\"d-inline\">\n      <option value=\"0\">Default</option>\n      <option value=\"1\">Product Name</option>\n      <option value=\"2\">Days Left</option>\n      <option value=\"3\">Price</option>\n      <option value=\"4\">Shipping Cost</option>\n    </select> \n    <select [disabled]=\"orderDisabled\" [(ngModel)]=\"order\" (change)=\"orderChange()\" class=\"custom-select col-lg-3 col-md-3 col-12 form-control-sm\" id=\"inputGroupSelect01\" class=\"d-inline\">\n        <option value=\"0\">Ascending</option>\n        <option value=\"1\">Descending</option>\n    </select>\n</div>\n\n\n\n\n<!-- the first five items -->\n<ul class=\"list-unstyled\">\n    <li *ngFor=\"let x of iteratorArray; let i = index\" class=\"media bg-dark text-left m-2 p-2\" >\n        <img src={{similarItems[i].picture}} alt=\"\" width=\"100\" height=\"100\" >\n      <div class=\"media-body text-left\">\n        <ul  class=\"list-unstyled pl-5 col-sm-12\">\n          <li><a href={{similarItems[i].link}}  class=\"text-info col-sm-12\"> {{similarItems[i].title}}</a></li>\n          <li class=\"text-success col-sm-12\">{{similarItems[i].price.name}}: {{similarItems[i].price.value}}</li>\n          <li class=\"text-warning col-sm-12\">{{similarItems[i].shipping.name}}: {{similarItems[i].shipping.value}}</li>\n          <li class=\"text-white col-sm-12\">{{similarItems[i].daysLeft.name}}: {{similarItems[i].daysLeft.value}}</li>\n        </ul>\n      </div>\n    </li>\n</ul>\n\n  <!-- the rest of the items after the fifth--> \n<ul *ngIf=\"showMore\" class=\"list-unstyled\" >\n    <li *ngFor=\"let item of similarItems | slice:6\" class=\"media bg-dark text-left  m-2 p-2 \" >\n        <img src={{item.picture}} alt=\"\" width=\"100\" height=\"100\" >\n      <div class=\"media-body text-left\">\n        <ul  class=\"list-unstyled pl-5 col-sm-12\">\n          <li><a href={{item.link}} class=\"text-info col-sm-12\"> {{item.title}}</a></li>\n          <li class=\"text-success col-sm-12\">{{item.price.name}}: {{item.price.value}}</li>\n          <li class=\"text-warning col-sm-12\">{{item.shipping.name}}: {{item.shipping.value}}</li>\n          <li class=\"text-white col-sm-12\">{{item.daysLeft.name}}: {{item.daysLeft.value}}</li>\n        </ul>\n      </div>\n    </li>\n</ul>\n\n<!-- the more button -->\n<div *ngIf=\"isMoreThanFive\" class=\"row\">\n  <div class=\"col\">\n    <button class=\"btn btn-dark\" (click)=\"showMoreButton()\">Show More</button>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/item/similar/similar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/item/similar/similar.component.ts ***!
  \***************************************************/
/*! exports provided: SimilarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarComponent", function() { return SimilarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimilarComponent = /** @class */ (function () {
    function SimilarComponent() {
        var _this = this;
        // conditional rendering 
        this.isMoreThanFive = false;
        this.showMore = false;
        this.orderDisabled = true;
        // Toggle More Items
        this.showMoreButton = function () {
            _this.showMore = !_this.showMore;
        };
        // Communicate with the select boxes
        this.filter = "0";
        this.order = "0";
        this.filters = {
            default: "0",
            name: "1",
            days: "2",
            price: "3",
            shipping: "4"
        };
        this.filterChange = function () {
            console.log("filterChanged");
            switch (_this.filter) {
                case _this.filters.default:
                    console.log(_this.originalItems);
                    _this.sortToOriginal();
                    _this.orderDisabled = true;
                    console.log("case default");
                    console.log(_this.similarItems);
                    break;
                case _this.filters.name:
                    _this.sortByName(_this.order);
                    _this.orderDisabled = false;
                    console.log("case name");
                    console.log(_this.similarItems);
                    break;
                case _this.filters.price:
                    _this.sortByPrice(_this.order);
                    _this.orderDisabled = false;
                    console.log("case price");
                    console.log(_this.similarItems);
                    break;
                case _this.filters.days:
                    _this.sortByDays(_this.order);
                    _this.orderDisabled = false;
                    console.log("case days");
                    console.log(_this.similarItems);
                    break;
                case _this.filters.shipping:
                    _this.sortByShipping(_this.order);
                    _this.orderDisabled = false;
                    console.log("case shipping");
                    console.log(_this.similarItems);
                    break;
                default:
                    console.log("none");
                    console.log(_this.similarItems);
            }
        };
        this.orderChange = function () {
            _this.similarItems.reverse();
        };
        // sorting Functions
        this.sortByName = function (order) {
            if (order === "0") {
                _this.similarItems.sort(function (a, b) { return (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0; });
            }
            else if (order === "1") {
                _this.similarItems.sort(function (a, b) { return (a.title < b.title) ? 1 : (a.title > b.title) ? -1 : 0; });
            }
        };
        this.sortByPrice = function (order) {
            _this.similarItems.sort(function (a, b) {
                var str = a.price.value;
                var num1 = parseInt(str.substring(str.lastIndexOf("$") + 1));
                str = b.price.value;
                var num2 = parseInt(str.substring(str.lastIndexOf("$") + 1));
                return _this.sortHelper(num1, num2, order);
            });
        };
        this.sortByDays = function (order) {
            _this.similarItems.sort(function (a, b) {
                var num1 = parseInt(a.daysLeft.value);
                var num2 = parseInt(b.daysLeft.value);
                return _this.sortHelper(num1, num2, order);
            });
        };
        this.sortByShipping = function (order) {
            _this.similarItems.sort(function (a, b) {
                var str = a.shipping.value;
                var num1 = parseInt(str.substring(str.lastIndexOf("$") + 1));
                str = b.shipping.value;
                var num2 = parseInt(str.substring(str.lastIndexOf("$") + 1));
                return _this.sortHelper(num1, num2, order);
            });
        };
        this.sortToOriginal = function () {
            _this.similarItems = _this.originalItems.slice();
        };
        this.sortHelper = function (num1, num2, order) {
            if (order === "0") {
                if (num1 > num2) {
                    return 1;
                }
                else if (num1 < num2) {
                    return -1;
                }
            }
            else if (order === "1") {
                if (num1 > num2) {
                    return -1;
                }
                else if (num1 < num2) {
                    return 1;
                }
            }
            return 0;
        };
    }
    SimilarComponent.prototype.ngOnInit = function () {
    };
    SimilarComponent.prototype.ngOnChanges = function () {
        this.numItems = this.similarItems.length;
        if (this.numItems > 5) {
            this.isMoreThanFive = true;
            this.iteratorArray = new Array(5).fill(0);
        }
        else {
            this.isMoreThanFive = false;
            this.iteratorArray = new Array(this.numItems).fill(0);
        }
        this.originalItems = this.similarItems.slice();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimilarComponent.prototype, "similarItems", void 0);
    SimilarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-similar',
            template: __webpack_require__(/*! ./similar.component.html */ "./src/app/item/similar/similar.component.html"),
            styles: [__webpack_require__(/*! ./similar.component.css */ "./src/app/item/similar/similar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimilarComponent);
    return SimilarComponent;
}());



/***/ }),

/***/ "./src/app/items-table/items-table.component.css":
/*!*******************************************************!*\
  !*** ./src/app/items-table/items-table.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zLXRhYmxlL2l0ZW1zLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/items-table/items-table.component.html":
/*!********************************************************!*\
  !*** ./src/app/items-table/items-table.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <!-- Items  -->\n<div *ngIf=\"itemsShowing\" class=\"col-12 col-lg-8 col-md-8 m-auto\" [@slideFromRight]=\"shouldAnimate\">\n    <div class=\"col text-right mb-3\">\n        <button class=\"btn btn-light uk-vertical-align-middle\" (click)=\"goToDetails()\" [disabled]=\"detailsBtnDisabled\">\n          Details\n          <i class=\"material-icons align-bottom\">keyboard_arrow_right</i>\n        </button>\n    </div>\n    <app-error *ngIf=\"isItemsEmpty\"[message]=\"errorMessage\"></app-error>\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped table-hover table-dark \" *ngIf=\"!isItemsEmpty\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Image</th>\n                <th scope=\"col\">Title</th>\n                <th scope=\"col\">Price</th>\n                <th scope=\"col\">Shipping</th>\n                <th scope=\"col\">Zip</th>\n                <th scope=\"col\">Seller</th>\n                <th scope=\"col\">Wish List</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of pages[currentPage]; let i=index\" [ngClass]=\"getClass(item.itemId)\" > \n                <th scope=\"row\">{{(currentPage * 10)+i +1}}</th>\n                <!-- IMAGE -->\n                <td>\n                  <img src={{item.image}} alt=\"...\"  width=\"100\" height=\"100\">\n                </td>\n                <!-- TITLE -->\n                <td>\n                    <a class=\"text-primary\" (click)=\"sendItem(item)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title={{item.title}}>{{item.shortenedTitle}}</a>\n                </td>\n                <td>{{item.price}}</td>\n                <td>{{item.shipping.cost.value}}</td>\n                <td>{{item.zip}}</td>\n                <!-- Username -->\n                <td>{{item.seller.username.value}}</td>\n                <!-- CART -->\n                <td>\n                  <!-- In Cart -->\n                  <button *ngIf=\"item.isInCart\" (click)=\"removeFromCart(item)\" class=\"rounded-sm text-warning\">\n                    <i class=\"material-icons\">remove_shopping_cart</i>\n                  </button>\n                  <!-- Not In Cart -->\n                  <button *ngIf=\"!item.isInCart \" (click)=\"addToCart(item)\"  class=\"rounded-sm \">\n                      <i class=\"material-icons \">add_shopping_cart</i>\n                    </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n   \n    \n\n <!-- PAGINATION -->\n      <nav aria-label=\"Page navigation example\" *ngIf=\"!isItemsEmpty\">\n          <ul class=\"pagination justify-content-center \">\n            <li>\n              <button  [disabled]=\"prevDisabled\" (click)=\"prevPage()\" class=\"btn btn-light \" href=\"#\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>  Previous\n              </button>\n            </li>\n            <li *ngFor=\"let page of pages; let i=index\" >\n              <button (click)=\"goToPage(i)\" class=\"btn btn-light\" [ngClass]=\"getPageClass(i)\" href=\"#\">{{i+1}}</button>\n            </li>\n            <li >\n              <button [disabled]=\"nextDisabled\" (click)=\"nextPage()\" class=\"btn btn-light \" href=\"#\" aria-label=\"Next\">\n                  Next <span aria-hidden=\"true\">&raquo;</span>\n              </button>\n            </li>\n          </ul>\n        </nav>\n</div>\n\n\n\n\n\n\n\n<!-- Detail Tabs -->\n\n<div *ngIf=\"detailsShowing\"  class=\"col-12 col-lg-8 col-md-8 m-auto\" >\n  <app-item [item]=\"item\" (backToList)=\"goToList()\"></app-item>\n</div>\n"

/***/ }),

/***/ "./src/app/items-table/items-table.component.ts":
/*!******************************************************!*\
  !*** ./src/app/items-table/items-table.component.ts ***!
  \******************************************************/
/*! exports provided: ItemsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsTableComponent", function() { return ItemsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var ItemsTableComponent = /** @class */ (function () {
    function ItemsTableComponent(http) {
        var _this = this;
        this.http = http;
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // conditional views
        this.detailsDisabled = true;
        this.detailsShowing = false;
        this.itemsShowing = true;
        this.shouldAnimate = false;
        //local variables
        this.pages = [];
        this.errorMessage = "No Records Found";
        // control variables
        this.nextDisabled = false;
        this.prevDisabled = true;
        this.detailsBtnDisabled = true; //change this to true
        this.isItemsEmpty = true;
        this.highlightRow = {};
        this.highlightPage = {};
        // ITEM CLICKED 
        this.sendItem = function (item) {
            var _a;
            // console.log(item)
            _this.highlightRow = (_a = {}, _a[item.itemId] = "table-dark", _a);
            _this.item = item;
            _this.itemsShowing = false;
            _this.detailsShowing = true;
            _this.detailsBtnDisabled = false;
            _this.shouldAnimate = true;
            _this.itemSelected.emit(item);
        };
        this.getClass = function (itemId) {
            if (_this.highlightRow[itemId]) {
                return _this.highlightRow[itemId];
            }
            else {
                return "";
            }
        };
        //Details Button Logic 
        this.goToDetails = function () {
            _this.shouldAnimate = true;
            _this.itemsShowing = false;
            _this.detailsShowing = true;
        };
        this.goToList = function () {
            _this.shouldAnimate = true;
            _this.itemsShowing = true;
            _this.detailsShowing = false;
        };
        // PAGINATION LOGIC
        // creates an array of pages, each containing an array of items.
        this.createPages = function () {
            if (!_this.isItemsEmpty) {
                var pages = [];
                var page = [];
                var itemIndex = 0;
                var itemsInLastPage = _this.items.length % 10;
                var numberOfPages = void 0;
                if (_this.pagesFull) {
                    numberOfPages = _this.numPages;
                }
                else {
                    numberOfPages = _this.numPages - 1;
                }
                // console.log("items in last page :", itemsInLastPage)
                // filling the full pages
                for (var i = 0; i < numberOfPages; i++) {
                    for (var j = 0; j < 10; j++) {
                        page.push(_this.items[itemIndex]);
                        itemIndex++;
                    }
                    pages.push(page);
                    page = [];
                }
                if (!_this.pagesFull) {
                    for (var k = 0; k < itemsInLastPage; k++) {
                        page.push(_this.items[itemIndex]);
                        itemIndex++;
                    }
                    pages.push(page);
                }
                // console.log(pages)
                return pages;
            }
        };
        this.prevPage = function () {
            var _a;
            _this.currentPage -= 1;
            if (_this.currentPage == 0) {
                _this.prevDisabled = true;
            }
            _this.nextDisabled = false;
            _this.highlightPage = (_a = {}, _a[_this.currentPage] = "btn-dark", _a);
        };
        this.nextPage = function () {
            var _a;
            _this.currentPage += 1;
            if (_this.currentPage == (_this.numPages - 1)) {
                _this.nextDisabled = true;
            }
            _this.prevDisabled = false;
            _this.highlightPage = (_a = {}, _a[_this.currentPage] = "btn-dark", _a);
        };
        this.goToPage = function (i) {
            var _a;
            _this.currentPage = i;
            if (_this.currentPage == 0) {
                _this.prevDisabled = true;
            }
            else {
                _this.prevDisabled = false;
            }
            if (_this.currentPage == (_this.numPages - 1)) {
                _this.nextDisabled = true;
            }
            else {
                _this.nextDisabled = false;
            }
            _this.highlightPage = (_a = {}, _a[_this.currentPage] = "btn-dark", _a);
        };
        this.getPageClass = function (i) {
            if (_this.highlightPage[i] != undefined) {
                return _this.highlightPage[i];
            }
            else {
                return "";
            }
        };
        // WISHLIST FUNCTIONS
        this.removeFromCart = function (myItem) {
            var key = JSON.stringify(myItem.itemId);
            localStorage.removeItem(key);
            myItem.isInCart = false;
        };
        this.addToCart = function (item) {
            console.log(item);
            item.isInCart = true;
            var key = JSON.stringify(item.itemId);
            localStorage.setItem(key, JSON.stringify(item));
        };
        this.checkInCart = function () {
            if (!_this.isItemsEmpty) {
                var id = void 0;
                for (var i = 0; i < _this.items.length; i++) {
                    id = JSON.stringify(_this.items[i].itemId);
                    if (localStorage.getItem(id) == null) {
                        _this.items[i].isInCart = false;
                    }
                    else {
                        _this.items[i].isInCart = true;
                    }
                }
            }
        };
        //Shortening titles of the items 
        this.shortenTitles = function () {
            if (!_this.isItemsEmpty) {
                // let titles = [];
                var items = _this.items;
                var tempStr = void 0;
                var pos = void 0;
                for (var i = 0; i < _this.items.length; i++) {
                    if (items[i].title.length > 35) {
                        pos = items[i].title.lastIndexOf(" ", 35);
                        tempStr = items[i].title.substring(0, pos);
                        tempStr += "...";
                        _this.items[i].shortenedTitle = tempStr.slice();
                        // titles.push(tempStr.slice());
                    }
                    else {
                        _this.items[i].shortenedTitle = items[i].title;
                        // titles.push(items[i].title);
                    }
                }
                // return titles;
            }
        };
    }
    ItemsTableComponent.prototype.ngOnInit = function () {
        var _a, _b;
        if (this.items === "Failure") {
            this.isItemsEmpty = true;
            this.errorMessage = "No Records Found";
            return;
        }
        if (this.items != undefined) {
            if (this.item != undefined) {
                this.highlightRow = (_a = {}, _a[this.item.itemId] = "table-dark", _a);
                this.detailsBtnDisabled = false;
            }
            this.isItemsEmpty = false;
            this.checkInCart();
            this.shortenTitles();
            if (this.items.length % 10 == 0) {
                this.numPages = this.items.length / 10;
                this.pagesFull = true;
            }
            else {
                this.numPages = Math.floor(this.items.length / 10) + 1;
                this.pagesFull = false;
            }
            this.pages = this.createPages();
            this.pageItems = this.pages[0];
            this.currentPage = 0;
            this.highlightPage = (_b = {}, _b[this.currentPage] = "btn-dark", _b);
            if (this.pages.length <= 1) {
                this.nextDisabled = true;
            }
        }
        else {
            this.isItemsEmpty = true;
            this.errorMessage = "Results Empty";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemsTableComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemsTableComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemsTableComponent.prototype, "itemSelected", void 0);
    ItemsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items-table',
            template: __webpack_require__(/*! ./items-table.component.html */ "./src/app/items-table/items-table.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideFromRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(1100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./items-table.component.css */ "./src/app/items-table/items-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemsTableComponent);
    return ItemsTableComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"wishlistShowing\" class=\"col-12 col-lg-8 col-md-8 m-auto\" [@slideFromRignt]>\n    <div class=\"col text-right mb-3\">\n        <button class=\"btn btn-light uk-vertical-align-middle\" (click)=\"goToDetails()\" [disabled]=\"detailsBtnDisabled\">\n          Details\n          <i class=\"material-icons align-bottom\">keyboard_arrow_right</i>\n        </button>\n    </div>\n    <app-error *ngIf=\"wishlistEmpty\" [message]=\"errorMessage\"></app-error>\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped table-dark\" *ngIf=\"!wishlistEmpty\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Image</th>\n                <th scope=\"col\">Title</th>\n                <th scope=\"col\">Price</th>\n                <th scope=\"col\">Shipping</th>\n                <th scope=\"col\">Zip</th>\n                <th scope=\"col\">Seller</th>\n                <th scope=\"col\">Wish List</th>\n          \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of items; let i=index\" [ngClass]=\"getClass(item.itemId)\">\n                  <th scope=\"row\">{{i}}</th>\n        \n                     <!-- IMAGE -->\n              <td>\n                  <img src={{item.image}} alt=\"...\" class=\"\" width=\"100\" height=\"100\">\n                </td>\n                <!-- TITLE -->\n                <td>\n                    <a class=\"text-primary\" (click)=\"sendItem(item)\">{{item.shortenedTitle}}</a>\n                </td>\n                <td>{{item.price}}</td>\n                <td>{{item.shipping.cost.value}}</td>\n                <td>{{item.zip}}</td>\n                <!-- Username -->\n                <td>{{item.seller.username.value}}</td>\n                <!-- CART -->\n                <td>\n                  <!-- In Cart -->\n                  <button  (click)=\"removeFromCart(item)\" class=\"rounded-sm\">\n                    <i class=\"material-icons text-warning\">remove_shopping_cart</i>\n                  </button>\n                  \n                </td>\n              </tr>\n              <tr >\n                <td>Total Shopping</td>\n                <td>${{total}}</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n  \n</div>\n\n\n\n  \n<!-- Detail Tabs -->\n\n<div *ngIf=\"detailsShowing\" class=\"col-12 col-lg-8 col-md-8 m-auto\">\n    <app-item [item]=\"item\" (backToList)=\"goToList()\"></app-item>\n</div>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent() {
        var _this = this;
        // CONTAINERS
        this.items = []; //items to be collected from the local storage 
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // conditionals
        this.detailsShowing = false;
        this.wishlistShowing = true;
        this.detailsBtnDisabled = true;
        this.wishlistEmpty = true;
        // VARIABLES
        this.errorMessage = "The wish list is empty";
        this.highlighRow = {};
        this.sendItem = function (item) {
            var _a;
            _this.highlighRow = (_a = {}, _a[item.itemId] = "table-dark", _a);
            _this.item = item;
            _this.wishlistShowing = false;
            _this.detailsShowing = true;
            _this.detailsBtnDisabled = false;
            _this.itemSelected.emit(item);
        };
        this.getClass = function (itemId) {
            if (_this.highlighRow[itemId]) {
                return _this.highlighRow[itemId];
            }
            else {
                return "";
            }
        };
        this.goToDetails = function () {
            _this.detailsShowing = true;
            _this.wishlistShowing = false;
        };
        // Switches to Items
        this.goToList = function () {
            _this.detailsShowing = false;
            _this.wishlistShowing = true;
        };
        // Shortens the titles of the items to 32 characters long
        this.shortenTitles = function () {
            var items = _this.items;
            var tempStr;
            var pos;
            for (var i = 0; i < _this.items.length; i++) {
                if (items[i].title.length > 35) {
                    pos = items[i].title.lastIndexOf(" ", 35);
                    tempStr = items[i].title.substring(0, pos);
                    tempStr += "...";
                    _this.items[i].shortenedTitle = tempStr.slice();
                }
                else {
                    _this.items[i].shortenedTitle = items[i].title;
                }
            }
        };
        this.getItems = function () {
            _this.items = []; //Reseting the items array
            _this.total = 0; //Reseting the total;
            var price = '';
            var keys = Object.keys(localStorage);
            for (var i = 0; i < localStorage.length; i++) {
                _this.items.push(JSON.parse(localStorage.getItem(keys[i])));
                price = JSON.parse(localStorage.getItem(keys[i])).price;
                price = price.slice(1);
                _this.total += parseInt(price);
            }
            if (_this.items.length != 0) {
                _this.wishlistEmpty = false;
            }
            else {
                _this.wishlistEmpty = true;
            }
        };
        this.removeFromCart = function (item) {
            var key = item.itemId;
            localStorage.removeItem(JSON.stringify(key));
            item.isInCart = false;
            _this.getItems();
        };
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _a;
        if (this.item != undefined) {
            this.highlighRow = (_a = {}, _a[this.item.itemId] = "table-dark", _a);
            this.detailsBtnDisabled = false;
        }
        this.getItems();
        this.shortenTitles();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WishlistComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WishlistComponent.prototype, "itemSelected", void 0);
    WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideFromRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(1100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WishlistComponent);
    return WishlistComponent;
}());

// 


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/harryminasyan/Desktop/hw8/Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map