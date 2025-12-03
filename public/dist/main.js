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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appservice.service */ "./src/app/appservice.service.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _kot_kot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kot/kot.component */ "./src/app/kot/kot.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _kot_kot_component__WEBPACK_IMPORTED_MODULE_10__["KotComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], { useHash: false })
            ],
            providers: [_appservice_service__WEBPACK_IMPORTED_MODULE_6__["AppService"], { provide: 'apiBase', useValue: '' }, _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _kot_kot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kot/kot.component */ "./src/app/kot/kot.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");



var ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
    { path: 'kot', component: _kot_kot_component__WEBPACK_IMPORTED_MODULE_1__["KotComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
];


/***/ }),

/***/ "./src/app/appservice.service.ts":
/*!***************************************!*\
  !*** ./src/app/appservice.service.ts ***!
  \***************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AppService = /** @class */ (function () {
    function AppService(httpClient, router, _api) {
        this.httpClient = httpClient;
        this.router = router;
        this._api = _api;
    }
    AppService.prototype.login = function (user) {
        return this.httpClient.post(this._api + '/login', user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    AppService.prototype.getActiveKot = function (companyId, posId, stockPointId, stockPointDivId) {
        return this.httpClient.post(this._api + "/kot/active", { companyId: companyId, posId: posId, stockPointId: stockPointId, stockPointDivId: stockPointDivId }, { headers: { 'Content-Type': 'application/json' } });
    };
    AppService.prototype.getStockPointDiv = function (companyId) {
        return this.httpClient.get(this._api + "/spd/" + companyId, { headers: { 'Content-Type': 'application/json' } });
    };
    AppService.prototype.updateKotQtyStatus = function (ktqIds, companyId, posId, status) {
        return this.httpClient.post(this._api + "/ktqupdate", { ktqIds: ktqIds, companyId: companyId, posId: posId, status: status }, { headers: { 'Content-Type': 'application/json' } });
    };
    AppService.prototype.deliverKotItem = function (ktqIds) {
        return this.httpClient.post(this._api + "/kotdelivery", { ktqIds: ktqIds }, { headers: { 'Content-Type': 'application/json' } });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('apiBase')),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], String])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (next.url[0].path == 'login' && window.localStorage.getItem('token')) {
            this.router.navigate(['/kot']);
            return false;
        }
        if (next.url[0].path == 'login' && !window.localStorage.getItem('token')) {
            // this.router.navigate(['/login']);
            return true;
        }
        if (next.url[0].path == '' && window.localStorage.getItem('token')) {
            this.router.navigate(['/kot']);
            return false;
        }
        if (next.url[0].path == 'kot' && !window.localStorage.getItem('token')) {
            this.router.navigate(['/login']);
            return false;
        }
        if (window.localStorage.getItem('token')) {
            return true;
        }
        if (next.url[0].path != 'login' && !window.localStorage.getItem('token')) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/kot/kot.component.css":
/*!***************************************!*\
  !*** ./src/app/kot/kot.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kot/kot.component.html":
/*!****************************************!*\
  !*** ./src/app/kot/kot.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-main\" wrapper-main=\"enabled\">\n\t\t<div class=\"wrapper-inner\">\n\t  \n\t\t  <div class=\"d-flex dFlexLayoutMain\">\n\t\t\t\n\t\t\t<div class=\"flex-col mr-auto content-wrapper w-100\">\n\t\t\t  <header class=\"header-main bg-white\" global-header=\"app\">\n\t\t\t\t  <nav class=\"navbar navbar-expand-lg navbar-light d-flex justify-content-between\">\n\t\t\t\t\t<a class=\"navbar-brand\" href=\"javascript:void(0)\"><img src=\"assets/img/logo.svg\" width=\"180px\"></a>\n\t\t\t\t\t<!-- <a class=\"navbar-brand mr-auto ml-3\" href=\"#\"><img src=\"assets/img/logo2.svg\" width=\"30px\"></a> -->\n\t\t\t\t\t<!-- <span class=\"mr-auto\"><i class=\"material-icons\">calendar_today</i>&nbsp; 22/12/2018</span> -->\n\t\t\t\t\t<select id=\"spd\" name=\"spd\" [(ngModel)]=\"selectedSpd\" (change)=\"spdChange()\">\n\t\t\t\t\t\t<option [ngValue]=\"'Select'\">Select</option>\n\t\t\t\t\t\t<option *ngFor=\"let spd of spds\" [ngValue]=\"spd\">{{spd.divisionName}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<span class=\"mr-auto\"><i class=\"material-icons\">schedule</i>&nbsp; {{currentTime}}</span>\n\t\t\t\t\t<button class=\"navbar-toggler d-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t\t\t  <span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t  \n\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t\t\t  <ul class=\"navbar-nav\">\n\t\t\t\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t\t\t  <a class=\"nav-link dropdown-toggle p-0\" href=\"#\" role=\"button\" data-toggle=\"dropdown\"><img src=\"assets/img/profile.svg\"></a>\n\t\t\t\t\t\t  <div class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\">{{decode.username}}</a>\n\t\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">Log Out</a>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t  </ul>\n\t\t\t\t\t</div><!-- /.collapse navbar-collapse -->\n\t\t\t\t  </nav>\n\t\t\t  </header><!-- /.header-main -->\n\t\t\t  <div class=\"content-main scroll content-height position-relative\" global-content=\"app\">\n\t\t\t\t<section class=\"content px-3 py-2 h-100vh\" style=\"max-height:calc(100vh - 58px);\">\n\t\t\t\t  <div class=\"kot-wrapper d-flex flex-column h-100\">\n\t  \n\t\t\t\t\t  <div class=\"d-flex w-100\">\n\t\t\t\t\t\t  <div class=\"col-table\">\n\t\t\t\t\t\t\t  <header><h5 class=\"text-uppercase font-weight-bold\">Pending KOTs</h5></header>\n\t\t\t\t\t\t\t  <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t  <table class=\"table table-bordered table-sm\">\n\t\t\t\t\t\t\t\t\t  <thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t\t  <th>K#</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>Table</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>Time</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>Waiter</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>A</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>R</th>\n\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t\t\t  <tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let kot of pendingKots;let i=index;\">\n\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t\t  <td>{{kot.kotNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  <td (click)=\"displayTableItems(kot)\" style=\"cursor: pointer;\">{{kot.tableNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  <td>{{kot.createdTime}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  <td>{{kot.waiterName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  <td><a class=\"icon-btn\"><i (click)=\"updateKotStatus(kot.kotId, 'ORDERED', 'ACCEPTED')\" class=\"material-icons\" style=\"cursor: pointer;\"> done </i></a></td>\n\t\t\t\t\t\t\t\t\t\t\t  <td><a class=\"icon-btn\"><i (click)=\"updateKotStatus(kot.kotId, 'ACCEPTED', 'READY')\" class=\"material-icons\" style=\"cursor: pointer;\"> thumb_up </i></a></td>\n\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t\t  <ng-container *ngIf=\"kot.tableItems && kot.tableItems.length\" >\n\t\t\t\t\t\t\t\t\t\t\t<tr class=\"expand-child\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Items</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>A</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>R</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of kot.tableItems;let j=index;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.itemname}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\" name=\"aqty{{i}}\" [(ngModel)]=\"item.selectedAccQty\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let num of getNumAsArray(item.accQty);\" [ngValue]=\"num\" >{{num}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"input-group-text p-0\" (click)=\"updateKotQtyStatus(item.accIds, 'ACCEPTED',item.selectedAccQty)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"icon-btn\" style=\"cursor: pointer;\"><i class=\"material-icons\"> done </i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\" name=\"rqty{{i}}\" [(ngModel)]=\"item.selectedRQty\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let num of getNumAsArray(item.rQty);\" [ngValue]=\"num\" >{{num}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"input-group-text p-0\" style=\"cursor: pointer;\" (click)=\"updateKotQtyStatus(item.rIds, 'READY',item.selectedRQty)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"icon-btn\"><i class=\"material-icons\"> thumb_up </i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"col-table\">\n\t\t\t\t\t\t\t  <header><h5 class=\"text-uppercase font-weight-bold\">Pending Items (WIP)</h5></header>\n\t\t\t\t\t\t\t  <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t  <table class=\"table table-bordered table-sm\">\n\t\t\t\t\t\t\t\t\t  <thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t\t  <th>Item</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>Qty</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>R</th>\n\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t\t\t  <tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of pendingItems;let i=index;\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.instruction\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"displayInstrTable(item)\" style=\"cursor: pointer;color: #337ab7;padding-right: 4px;\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong class=\"color\" style=\"cursor: pointer;\" (click)=\"displayreadyItemTable(item)\" [style.color]=\"item.colorCode\">{{item.itemname}}<ng-container *ngIf=\"item.base_qty!=1\" > - {{item.uomSize}}</ng-container></strong>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{item.qty}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><a class=\"icon-btn\"><i style=\"cursor: pointer;\" (click)=\"updateKotQtyStatus(item.ktqIds, 'READY',item.qty)\" class=\"material-icons\"> thumb_up </i></a></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.instrTable && item.instrTable.length\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"expand-child\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<header><h5>Gobi Chilly Manchurian</h5></header>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Instructions</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>K#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>R</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let instr of item.instrTable\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{instr.instruction}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{instr.kotNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{instr.tableNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\" name=\"instrqty{{i}}\" [(ngModel)]=\"instr.selectedQty\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let num of getNumAsArray(instr.qty);\" [ngValue]=\"num\" >{{num}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"cursor: pointer;\" (click)=\"updateKotQtyStatus(instr.ktqIds, 'READY',instr.selectedQty)\" class=\"input-group-text p-0\"><a class=\"icon-btn\"><i class=\"material-icons\"> thumb_up </i></a></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"item.readyItemTable && item.readyItemTable.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"expand-child\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<header><h5>Gobi Chilly Manchurian</h5></header>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>K#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>T#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>R</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let rd of item.readyItemTable\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{rd.kotNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{rd.tableNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select\" name=\"instrqty{{i}}\" [(ngModel)]=\"rd.selectedQty\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let num of getNumAsArray(rd.qty);\" [ngValue]=\"num\" >{{num}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label style=\"cursor: pointer;\" (click)=\"updateKotQtyStatus(rd.ktqIds, 'READY',rd.selectedQty)\" class=\"input-group-text p-0\"><a class=\"icon-btn\"><i class=\"material-icons\"> thumb_up </i></a></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"col-table\">\n\t\t\t\t\t\t\t  <header><h5 class=\"text-uppercase font-weight-bold\">Items Ready for Delivery</h5></header>\n\t\t\t\t\t\t\t  <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t  <table class=\"table table-bordered table-sm\">\n\t\t\t\t\t\t\t\t\t  <thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t\t  <th>Item</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>Qty</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>T#</th>\n\t\t\t\t\t\t\t\t\t\t\t  <th>D</th>\n\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t\t\t  <tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t  <tr *ngFor=\"let item of itemsReadyForDelivery\">\n\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.itemname}} <ng-container *ngIf=\"item.base_qty!=1\" >- {{item.uomSize}}</ng-container></td>\n\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.qty}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.tableNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  <td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <select name=\"qty{{i}}\" [(ngModel)]=\"item.selectedQty\" class=\"custom-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let num of getNumAsArray(item.qty);\" [ngValue]=\"num\" >{{num}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <label style=\"cursor: pointer;\" (click)=\"deliverKotItem(item.ktqIds, item.selectedQty)\" class=\"input-group-text p-0\"><a class=\"icon-btn\"><i class=\"material-icons\"> done </i></a></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t  </td>\n\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"container-fluid mt-auto\">\n\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t  <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t  <header><h5 class=\"text-uppercase font-weight-bold\">Delivered Items</h5></header>\n\t\t\t\t\t\t\t\t  <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t  <table class=\"table table-bordered table-sm\">\n\t\t\t\t\t\t\t\t\t\t  <thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>K#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>T#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>Waiter</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>Item</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>Qty</th>\n\t\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t\t\t\t  <tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t\t  <tr *ngFor=\"let item of deliveredItems\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.kotNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.tableNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.waiterName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.itemname}} <ng-container *ngIf=\"item.base_qty!=1\" >- {{item.uomSize}}</ng-container></td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.qty}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t  <header><h5 class=\"text-uppercase font-weight-bold\">Cancelled Items</h5></header>\n\t\t\t\t\t\t\t\t  <div class=\"table-responsive\">\n\t\t\t\t\t\t\t\t\t  <table class=\"table table-bordered table-sm\">\n\t\t\t\t\t\t\t\t\t\t  <thead class=\"thead-dark\">\n\t\t\t\t\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>K#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>T#</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>Waiter</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>Item</th>\n\t\t\t\t\t\t\t\t\t\t\t\t  <th>Qty</th>\n\t\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t\t  </thead>\n\t\t\t\t\t\t\t\t\t\t  <tbody class=\"table-hover\">\n\t\t\t\t\t\t\t\t\t\t\t  <tr *ngFor=\"let item of cancelledItems\">\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.kotNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.tableNo}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.waiterName}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.itemname}} <ng-container *ngIf=\"item.base_qty!=1\" >- {{item.uomSize}}</ng-container></td>\n\t\t\t\t\t\t\t\t\t\t\t\t  <td>{{item.qty}}</td>\n\t\t\t\t\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t\t\t\t  </tbody>\n\t\t\t\t\t\t\t\t\t  </table>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </div>\n\t  \n\t\t\t\t  </div><!-- /.layout-table-list -->\n\t\t\t\t</section>\n\t  \n\t\t\t  </div><!-- /.content-main -->\n\t\t\t</div><!-- /.content-wrapper -->\n\t\t  </div><!-- /.dFlexLayoutMain -->\n\t\t  \n\t  \n\t\t</div><!-- /.wrapper-inner -->\n\t  </div><!-- /.wrapper-main -->\n\t  "

/***/ }),

/***/ "./src/app/kot/kot.component.ts":
/*!**************************************!*\
  !*** ./src/app/kot/kot.component.ts ***!
  \**************************************/
/*! exports provided: KotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KotComponent", function() { return KotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _appservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appservice.service */ "./src/app/appservice.service.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/index */ "./src/app/utils/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KotComponent = /** @class */ (function () {
    function KotComponent(routes, _appservice) {
        this.routes = routes;
        this._appservice = _appservice;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this.decode = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        this.pendingKots = [];
        this.deliveredItems = [];
        this.itemsReadyForDelivery = [];
        this.cancelledItems = [];
        this.pendingItems = [];
        this.pendingKotMap = new Map();
        this.pendingItemsMap = new Map();
        this.itemsReadyForDeliveryMap = new Map();
        this.cancelledItemMap = new Map();
        this.deliveredItemMap = new Map();
        this.tableItems = [];
        this.instrTable = [];
        this.readyItemTable = [];
    }
    KotComponent.prototype.ngOnInit = function () {
        this.getSPDs(this.decode.companyId);
        this.startClockTimer(true);
        this.startTimer();
    };
    KotComponent.prototype.ngOnDestroy = function () {
        this.stopTimer();
        this.startClockTimer(false);
    };
    KotComponent.prototype.logout = function () {
        localStorage.removeItem("token");
        this.routes.navigate(['/login']);
    };
    KotComponent.prototype.spdChange = function () {
        if (this.timerSub && !this.timerSub.closed) {
            this.timerSub.unsubscribe();
        }
        if (typeof this.selectedSpd === "string") {
            return;
        }
        this.getActiveKot(this.selectedSpd);
        this.startTimer();
    };
    KotComponent.prototype.getSPDs = function (companyId) {
        var _this = this;
        this._appservice.getStockPointDiv(companyId).subscribe(function (data) {
            _this.spds = data.data;
        }, function (error) {
            alert("Error Fetching Stock Point division");
        });
    };
    KotComponent.prototype.getActiveKot = function (spd) {
        var _this = this;
        this.pendingItemsMap = new Map();
        this.pendingKotMap = new Map();
        this.cancelledItemMap = new Map();
        this.deliveredItemMap = new Map();
        this.itemsReadyForDeliveryMap = new Map();
        this.tableItems = [];
        this._appservice.getActiveKot(this.decode.companyId, this.decode.posId, spd.stockPointId, spd.stockPointDivId)
            .subscribe(function (data) {
            _this.kotData = data.data;
            _this.processKotData(data.data);
        }, function (error) {
            console.log(error);
        });
    };
    KotComponent.prototype.startClockTimer = function (start) {
        var _this = this;
        if (start) {
            this.clockSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000).subscribe(function (data) {
                _this.currentTime = _utils_index__WEBPACK_IMPORTED_MODULE_5__["CommonUtil"].formatDate(new Date(), 'hh:mm:ss a');
            });
        }
        else {
            if (this.clockSub && !this.clockSub.closed) {
                this.clockSub.unsubscribe();
            }
        }
    };
    KotComponent.prototype.startTimer = function () {
        var _this = this;
        if (this.selectedSpd) {
            this.timerSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(30000).subscribe(function (data) {
                _this.getActiveKot(_this.selectedSpd);
            });
        }
    };
    KotComponent.prototype.stopTimer = function () {
        if (this.timerSub && !this.timerSub.closed) {
            this.timerSub.unsubscribe();
        }
    };
    KotComponent.prototype.processKotData = function (kots) {
        for (var _i = 0, kots_1 = kots; _i < kots_1.length; _i++) {
            var kot = kots_1[_i];
            switch (kot.status) {
                case "ORDERED":
                    this.addPendingKot(kot);
                    break;
                case "ACCEPTED":
                    this.addPendingKot(kot);
                    this.addPendingItems(kot);
                    break;
                case "READY":
                    this.addPendingKot(kot);
                    this.addItemForDelivery(kot);
                    break;
                case "CANCELLED":
                    this.addCancelledItems(kot);
                    break;
                case "DELIVERED":
                    this.addDeliveredItems(kot);
                    break;
            }
        }
        this.pendingItems = _utils_index__WEBPACK_IMPORTED_MODULE_5__["CommonUtil"].sortJsonArray(Array.from(this.pendingItemsMap.values()), 'sortOrder', true);
        this.deliveredItems = Array.from(this.deliveredItemMap.values());
        this.itemsReadyForDelivery = Array.from(this.itemsReadyForDeliveryMap.values());
        this.pendingKots = Array.from(this.pendingKotMap.values());
        this.pendingKots = _utils_index__WEBPACK_IMPORTED_MODULE_5__["CommonUtil"].sortJsonArray(this.pendingKots, "kotNo", false);
        this.cancelledItems = Array.from(this.cancelledItemMap.values());
    };
    KotComponent.prototype.addPendingKot = function (kot) {
        if (!this.pendingKotMap.get(kot.kotId)) {
            var pKot = { kotId: kot.kotId, kotNo: kot.kotNo, tableId: kot.tableId, tableNo: kot.tableNo, createdTime: _utils_index__WEBPACK_IMPORTED_MODULE_5__["CommonUtil"].formatDate(kot.createdTime, 'hh:mm a'),
                waiterName: kot.waiterName, ktqIds: [kot.id] };
            this.pendingKotMap.set(kot.kotId, pKot);
        }
        else {
            var pKot = this.pendingKotMap.get(kot.kotId);
            pKot.ktqIds.push(kot.id);
        }
    };
    KotComponent.prototype.addPendingItems = function (kot) {
        if (this.pendingItemsMap.get(kot.itemcode)) {
            var item = this.pendingItemsMap.get(kot.itemcode);
            item.qty = item.qty + kot.qty;
            item.ktqIds.push(kot.id);
            if (kot.instruction) {
                item.instruction = true;
            }
        }
        else {
            var item = { itemcode: kot.itemcode, qty: kot.qty, uomSize: kot.uomSize, base_qty: kot.base_qty, itemname: kot.itemname,
                ktqIds: [kot.id], sortOrder: kot.sortOrder };
            if (kot.instruction) {
                item.instruction = true;
            }
            item.colorCode = "#000000";
            if (kot.colorCode) {
                item.colorCode = kot.colorCode;
            }
            this.pendingItemsMap.set(kot.itemcode, item);
        }
    };
    KotComponent.prototype.addItemForDelivery = function (kot) {
        if (this.itemsReadyForDeliveryMap.get(kot.itemcode + "-" + kot.tableId)) {
            var item = this.itemsReadyForDeliveryMap.get(kot.itemcode + "-" + kot.tableId);
            item.qty = item.qty + kot.qty;
            item.selectedQty = item.qty;
            item.ktqIds.push(kot.id);
        }
        else {
            var item = { itemcode: kot.itemcode, itemname: kot.itemname, qty: kot.qty, uomSize: kot.uomSize, base_qty: kot.base_qty, tableId: kot.tableId,
                tableNo: kot.tableNo, ktqIds: [kot.id] };
            item.selectedQty = item.qty;
            this.itemsReadyForDeliveryMap.set(kot.itemcode + "-" + kot.tableId, item);
        }
    };
    KotComponent.prototype.addCancelledItems = function (kot) {
        if (this.cancelledItemMap.get(kot.itemcode + "-" + kot.kotId)) {
            var item = this.cancelledItemMap.get(kot.itemcode);
            item.qty = item.qty + kot.qty;
        }
        else {
            var item = { kotId: kot.kotId, kotNo: kot.kotNo, tableId: kot.tableId, tableNo: kot.tableNo, itemname: kot.itemname,
                itemcode: kot.itemcode, qty: kot.qty, uomSize: kot.uomSize, base_qty: kot.base_qty, waiterName: kot.waiterName };
            this.cancelledItemMap.set(kot.itemcode + "-" + kot.kotId, item);
        }
    };
    KotComponent.prototype.addDeliveredItems = function (kot) {
        if (this.deliveredItemMap.get(kot.itemcode + "-" + kot.kotId)) {
            var item = this.deliveredItemMap.get(kot.itemcode + "-" + kot.kotId);
            item.qty = item.qty + kot.qty;
        }
        else {
            var item = { kotId: kot.kotId, kotNo: kot.kotNo, tableId: kot.tableId, tableNo: kot.tableNo,
                itemcode: kot.itemcode, itemname: kot.itemname, qty: kot.qty, uomSize: kot.uomSize, base_qty: kot.base_qty, waiterName: kot.waiterName };
            this.deliveredItemMap.set(kot.itemcode + "-" + kot.kotId, item);
        }
    };
    KotComponent.prototype.displayTableItems = function (kot) {
        this.instrTable = [];
        this.readyItemTable = [];
        this.clearPendingKotSelection();
        var tblMap = new Map();
        for (var _i = 0, _a = this.kotData; _i < _a.length; _i++) {
            var kt = _a[_i];
            if (kt.tableId == kot.tableId && kt.cancel == 0 && ["ORDERED", "ACCEPTED"].indexOf(kt.status) >= 0) {
                if (tblMap.get(kt.itemcode)) {
                    var it = tblMap.get(kt.itemcode);
                    it.qty = it.qty + kt.qty;
                    it.ktqIds.push(kt.id);
                    switch (kt.status) {
                        case "ORDERED":
                            it.accQty = it.accQty + kt.qty;
                            it.accIds.push(kt.id);
                            it.selectedAccQty = it.accQty;
                            break;
                        case "ACCEPTED":
                            it.rQty = it.rQty + kt.qty;
                            it.rIds.push(kt.id);
                            it.selectedRQty = it.rQty;
                            break;
                    }
                }
                else {
                    var it = { itemname: kt.itemname, itemcode: kt.itemcode, uomSize: kt.uomSize, base_qty: kt.base_qty,
                        qty: kt.qty, kotTransactionId: kt.kotTransactionId, kotId: kt.kotId, ktqIds: [kt.id], accQty: 0, rQty: 0,
                        accIds: [], rIds: [] };
                    switch (kt.status) {
                        case "ORDERED":
                            it.accQty = it.accQty + kt.qty;
                            it.accIds.push(kt.id);
                            it.selectedAccQty = it.accQty;
                            break;
                        case "ACCEPTED":
                            it.rQty = it.rQty + kt.qty;
                            it.rIds.push(kt.id);
                            it.selectedRQty = it.rQty;
                            break;
                    }
                    tblMap.set(kt.itemcode, it);
                }
            }
        }
        this.tableItems = Array.from(tblMap.values());
        kot.tableItems = this.tableItems;
    };
    KotComponent.prototype.getNumAsArray = function (num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(i + 1);
        }
        return arr;
    };
    KotComponent.prototype.updateKotQtyStatus = function (ktqIds, status, qty) {
        var _this = this;
        var ids = ktqIds.splice(0, qty);
        this.stopTimer();
        this._appservice.updateKotQtyStatus(ids, this.decode.companyId, this.decode.posId, status)
            .subscribe(function (data) {
            _this.getActiveKot(_this.selectedSpd);
            _this.startTimer();
        }, function (error) {
            console.log(error);
            alert("Error while updating status. Kindly try again");
        });
    };
    KotComponent.prototype.deliverKotItem = function (ktqIds, qty) {
        var _this = this;
        this.stopTimer();
        var ids = ktqIds.splice(0, qty);
        this._appservice.deliverKotItem(ids).subscribe(function (data) {
            _this.getActiveKot(_this.selectedSpd);
            _this.startTimer();
        }, function (error) {
            alert("Error while kot delivery ");
        });
    };
    KotComponent.prototype.updateKotStatus = function (kotId, currStatus, status) {
        var _this = this;
        this.stopTimer();
        var ktqIds = [];
        for (var _i = 0, _a = this.kotData; _i < _a.length; _i++) {
            var kt = _a[_i];
            if (kt.kotId == kotId && kt.status == currStatus) {
                ktqIds.push(kt.id);
            }
        }
        if (ktqIds.length) {
            this._appservice.updateKotQtyStatus(ktqIds, this.decode.companyId, this.decode.posId, status)
                .subscribe(function (data) {
                _this.getActiveKot(_this.selectedSpd);
                _this.startTimer();
            }, function (error) {
                _this.startTimer();
                alert("Error happened while updating kot status");
            });
        }
        else {
            this.startTimer();
        }
    };
    KotComponent.prototype.displayInstrTable = function (item) {
        this.tableItems = [];
        this.readyItemTable = [];
        item.readyItemTable = [];
        this.clearpendingItemsSelection();
        var instrMap = new Map();
        for (var _i = 0, _a = this.kotData; _i < _a.length; _i++) {
            var ko = _a[_i];
            if (ko.itemcode == item.itemcode && ko.instruction && ko.status == "ACCEPTED") {
                if (instrMap.get(ko.itemcode + "-" + ko.kotId)) {
                    var it = instrMap.get(ko.itemcode + "-" + ko.kotId);
                    it.qty = it.qty + ko.qty;
                    it.selectedQty = it.qty;
                    it.ktqIds.push(ko.id);
                }
                else {
                    var it = _utils_index__WEBPACK_IMPORTED_MODULE_5__["CommonUtil"].clone(ko);
                    it.ktqIds = [ko.id];
                    it.selectedQty = it.qty;
                    instrMap.set(ko.itemcode + "-" + ko.kotId, it);
                }
            }
        }
        this.instrTable = Array.from(instrMap.values());
        item.instrTable = this.instrTable;
    };
    KotComponent.prototype.displayreadyItemTable = function (item) {
        this.tableItems = [];
        this.instrTable = [];
        item.instrTable = [];
        this.readyItemTable = [];
        this.clearpendingItemsSelection();
        var map = new Map();
        for (var _i = 0, _a = this.kotData; _i < _a.length; _i++) {
            var ko = _a[_i];
            if (ko.itemcode == item.itemcode && ko.status == "ACCEPTED") {
                if (map.get(ko.itemcode + "-" + ko.kotId)) {
                    var it = map.get(ko.itemcode + "-" + ko.kotId);
                    it.qty = it.qty + ko.qty;
                    it.selectedQty = it.qty;
                    it.ktqIds.push(ko.id);
                }
                else {
                    var it = _utils_index__WEBPACK_IMPORTED_MODULE_5__["CommonUtil"].clone(ko);
                    it.ktqIds = [ko.id];
                    it.selectedQty = it.qty;
                    map.set(ko.itemcode + "-" + ko.kotId, it);
                }
            }
        }
        this.readyItemTable = Array.from(map.values());
        item.readyItemTable = this.readyItemTable;
    };
    KotComponent.prototype.clearpendingItemsSelection = function () {
        for (var _i = 0, _a = this.pendingItems; _i < _a.length; _i++) {
            var p = _a[_i];
            p.instrTable = [];
            p.readyItemTable = [];
        }
    };
    KotComponent.prototype.clearPendingKotSelection = function () {
        for (var _i = 0, _a = this.pendingKots; _i < _a.length; _i++) {
            var k = _a[_i];
            k.tableItems = [];
        }
    };
    KotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kot',
            template: __webpack_require__(/*! ./kot.component.html */ "./src/app/kot/kot.component.html"),
            styles: [__webpack_require__(/*! ./kot.component.css */ "./src/app/kot/kot.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _appservice_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], KotComponent);
    return KotComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body#LoginForm{ background-image:url(\"https://hdwallsource.com/img/2014/9/blur-26347-27038-hd-wallpapers.jpg\"); background-repeat:no-repeat; background-position:center; background-size:cover; padding:123px;} */\nbody#LoginForm{ background-image:url(\"https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg\"); background-repeat:no-repeat; background-position:center; background-size:cover; padding:123px;}\n.form-heading { color:#fff; font-size:23px;}\n.panel h2{ color:#444444; font-size:18px; margin:0 0 8px 0;}\n.panel p { color:#777777; font-size:14px; margin-bottom:30px; line-height:24px;}\n.login-form .form-control {\nbackground: #f7f7f7 none repeat scroll 0 0;\nborder: 1px solid #d4d4d4;\nborder-radius: 4px;\nfont-size: 14px;\nheight: 50px;\nline-height: 50px;\n}\n.main-div {\nbackground: #ffffff none repeat scroll 0 0;\nborder-radius: 2px;\nmargin: 10px auto 30px;\nmax-width: 38%;\npadding: 50px 70px 70px 71px;\n}\n.login-form .form-group {\nmargin-bottom:10px;\n}\n.login-form{ text-align:center;}\n.forgot a {\ncolor: #777777;\nfont-size: 14px;\ntext-decoration: underline;\n}\n.login-form .btn.btn-primary {\nbackground: #f0ad4e none repeat scroll 0 0;\nborder-color: #f0ad4e;\ncolor: #ffffff;\nfont-size: 14px;\nwidth: 100%;\nheight: 50px;\nline-height: 50px;\npadding: 0;\n}\n.forgot {\ntext-align: left; margin-bottom:30px;\n}\n.botto-text {\ncolor: #ffffff;\nfont-size: 14px;\nmargin: auto;\n}\n.login-form .btn.btn-primary.reset {\nbackground: #ff9900 none repeat scroll 0 0;\n}\n.back { text-align: left; margin-top:10px;}\n.back a {color: #444444; font-size: 13px;text-decoration: none;}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-main\" wrapper-main=\"enabled\">\n    <div class=\"wrapper-inner\">\n  \n      <div class=\"loginWrapper d-flex justify-content-center\">\n          <div class=\"form align-self-center\">\n            <form id=\"loginForm\" name=\"loginForm\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <h2 class=\"text-center mb-4 text-uppercase\">Login</h2>\n                <div class=\"form-group\">\n                    <label for=\"\">Username:</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"user.username\"\n                    name=\"username\" #username=\"ngModel\" required=\"required\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Password:</label>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"**********\" [(ngModel)]=\"user.password\"\n                    name=\"password\" #password=\"ngModel\" required=\"required\" autocomplete=\"current-password\">\n                </div>\n                <div>\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n                </div>\n            </form>\n          </div>\n      </div>\n  \n    </div><!-- /.wrapper-inner -->\n  </div><!-- /.wrapper-main -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appservice.service */ "./src/app/appservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _appservice) {
        this.router = router;
        this._appservice = _appservice;
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._appservice.login(this.user)
            .subscribe(function (response) {
            var token = response.token;
            if (token) {
                _this.token = token;
                localStorage.setItem("token", token);
                _this.router.navigate(['/kot']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _appservice_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/utils/commonUtil.ts":
/*!*************************************!*\
  !*** ./src/app/utils/commonUtil.ts ***!
  \*************************************/
/*! exports provided: CommonUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtil", function() { return CommonUtil; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

var CommonUtil = /** @class */ (function () {
    function CommonUtil() {
    }
    CommonUtil.getFloatingPrecision = function (num, precision) {
        return parseFloat(num.toFixed(precision));
    };
    CommonUtil.getFloatingPrecisionStr = function (num, precision) {
        return num.toFixed(precision);
    };
    CommonUtil.clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    //length should max of 14
    CommonUtil.genRandom = function (length, prefix) {
        var str = '1';
        for (var i = 0; i < length; i++) {
            str = str + '9';
        }
        var int = parseInt(str);
        return prefix + "" + Math.floor(Math.random() * int);
    };
    CommonUtil.sortJsonArray = function (array, key, asc) {
        array.sort(function (a, b) {
            var val1 = a[key];
            var val2 = b[key];
            if (typeof val1 === 'string') {
                val1 = val1.toLowerCase();
            }
            if (typeof val2 === 'string') {
                val2 = val2.toLowerCase();
            }
            if (val1 === val2)
                return 0;
            if (asc) {
                return val1 > val2 ? 1 : -1;
            }
            else {
                return val1 > val2 ? -1 : 1;
            }
        });
        return array;
    };
    CommonUtil.getSumJsonArray = function (array, key) {
        return array.reduce(function (sum, val) { return sum + val[key]; }, 0);
    };
    CommonUtil.formatDate = function (date, format) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(date, format, 'en-US', '+0530');
    };
    CommonUtil.diffTwoDate = function (date1, date2) {
        return date2.getTime() - date1.getTime();
    };
    CommonUtil.msTohhMM = function (millisecond) {
        var hours = Math.floor(millisecond / (1000 * 60 * 60));
        var hoursms = Math.floor(millisecond % (1000 * 60 * 60));
        var minutes = Math.floor((hoursms) / (60 * 1000));
        var hoursStr = hours + "";
        if (hours < 10) {
            hoursStr = "0" + hours;
        }
        var minStr = minutes + "";
        if (minutes < 10) {
            minStr = "0" + minutes;
        }
        return hoursStr + ":" + minStr;
    };
    CommonUtil.filterArray = function (key, value, arr) {
        var arrFiltered = arr.filter(function (obj, index) {
            return obj[key] == value;
        });
        return arrFiltered;
    };
    CommonUtil.addDaytoDate = function (dt, day) {
        dt.setDate(dt.getDate() + day);
        return dt;
    };
    return CommonUtil;
}());



/***/ }),

/***/ "./src/app/utils/index.ts":
/*!********************************!*\
  !*** ./src/app/utils/index.ts ***!
  \********************************/
/*! exports provided: CommonUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commonUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonUtil */ "./src/app/utils/commonUtil.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonUtil", function() { return _commonUtil__WEBPACK_IMPORTED_MODULE_0__["CommonUtil"]; });




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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\POS\latest_code\kot_display\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map