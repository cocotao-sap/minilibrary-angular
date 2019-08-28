(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center; padding: 8px;\">\n<h1>\n  ngx-weui\n</h1>\n<p>\n  ngx-weui 是 WeUI 的 Angular 版本，\n  WeUI\n  是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。\n</p>\n<p>\n</p>\n<div style=\"margin-top: 16px;\">\n  <button weui-button>Button</button>\n</div>\n</div> -->\n\n<!-- <tab-navigator></tab-navigator> -->\n\n<app-login-page></app-login-page>\n<app-wechat-authorization></app-wechat-authorization>\n<tab-navigator></tab-navigator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href={{wechatRedirectPath}}>直接跳转到微信提供的网页</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portal-page/portal-page.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portal-page/portal-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>portal-page works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab-navigator/tab-navigator.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab-navigator/tab-navigator.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<weui-tabbar>\n    <weui-tab heading=\"微信\" [badge]=\"8\" [icon]=\"'<img src=./assets/images/icon_tabbar.png>'\">\n      <weui-infiniteloader (loadmore)=\"onLoadMore($event)\">\n        <article class=\"weui-article\">\n          <h1>微信</h1>\n          <div class=\"weui-cells__title\">List with 50 Max</div>\n          <div class=\"weui-cells\">\n            <a *ngFor=\"let i of items\" class=\"weui-cell weui-cell_access\" href=\"javascript:;\">\n              <div class=\"weui-cell__bd\">{{ i }}</div>\n              <div class=\"weui-cell__ft\"></div>\n            </a>\n          </div>\n        </article>\n      </weui-infiniteloader>\n    </weui-tab>\n    <weui-tab\n      heading=\"通讯录\"\n      [icon]=\"'<img src=./assets/images/icon_tabbar.png>'\"\n      [activeIcon]=\"'<img src=./assets/images/momentloader.png>'\"\n      (select)=\"onSelect()\"\n    >\n      <article class=\"weui-article\">\n        <h1>通讯录</h1>\n        <p>Select Time: {{ time }}</p>\n      </article>\n    </weui-tab>\n    <weui-tab heading=\"发现\" [badge]=\"'dot'\" [icon]=\"'<img src=./assets/images/icon_tabbar.png>'\">\n      <article class=\"weui-article\">\n        <h1>发现</h1>\n      </article>\n    </weui-tab>\n    <weui-tab heading=\"我\" [icon]=\"'<img src=./assets/images/icon_tabbar.png>'\">\n      <article class=\"weui-article\">\n        <h1>我</h1>\n      </article>\n    </weui-tab>\n  </weui-tabbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/wechat-authorization/wechat-authorization.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wechat-authorization/wechat-authorization.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>wechat-authorization works!</p> -->\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wechat_authorization_wechat_authorization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wechat-authorization/wechat-authorization.component */ "./src/app/wechat-authorization/wechat-authorization.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _tab_navigator_tab_navigator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-navigator/tab-navigator.component */ "./src/app/tab-navigator/tab-navigator.component.ts");






const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: 'wechatAuthorization', component: _wechat_authorization_wechat_authorization_component__WEBPACK_IMPORTED_MODULE_3__["WechatAuthorizationComponent"] },
    { path: 'tabNavigator', component: _tab_navigator_tab_navigator_component__WEBPACK_IMPORTED_MODULE_5__["TabNavigatorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_weui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-weui */ "./node_modules/ngx-weui/fesm2015/ngx-weui.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _portal_page_portal_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portal-page/portal-page.component */ "./src/app/portal-page/portal-page.component.ts");
/* harmony import */ var _tab_navigator_tab_navigator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab-navigator/tab-navigator.component */ "./src/app/tab-navigator/tab-navigator.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _wechat_authorization_wechat_authorization_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wechat-authorization/wechat-authorization.component */ "./src/app/wechat-authorization/wechat-authorization.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _portal_page_portal_page_component__WEBPACK_IMPORTED_MODULE_7__["PortalPageComponent"],
            _tab_navigator_tab_navigator_component__WEBPACK_IMPORTED_MODULE_8__["TabNavigatorComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
            _wechat_authorization_wechat_authorization_component__WEBPACK_IMPORTED_MODULE_10__["WechatAuthorizationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_weui__WEBPACK_IMPORTED_MODULE_5__["WeUiModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login-page/login-page.component.less":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginPageComponent = class LoginPageComponent {
    constructor() { }
    ngOnInit() {
        this.wechatRedirectPath = this.initWechatRedirectPath();
    }
    initWechatRedirectPath() {
        const redirectPage = 'wechatAuthorization';
        const returnUri = 'http://www.ltvision123.com/' + redirectPage;
        const AppID = 'wx88094ad370bf30a8';
        const scope = 'snsapi_userinfo';
        const wechatPath = 'https://open.weixin.qq.com/connect/oauth2/authorize'
            + '?appid=' + AppID
            + '&redirect_uri=' + returnUri
            + '&response_type=code'
            + '&scope=' + scope
            + '&state=STATE&connect_redirect=1#wechat_redirect';
        return wechatPath;
    }
};
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__(/*! ./login-page.component.less */ "./src/app/login-page/login-page.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginPageComponent);



/***/ }),

/***/ "./src/app/portal-page/portal-page.component.less":
/*!********************************************************!*\
  !*** ./src/app/portal-page/portal-page.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC1wYWdlL3BvcnRhbC1wYWdlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/portal-page/portal-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portal-page/portal-page.component.ts ***!
  \******************************************************/
/*! exports provided: PortalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalPageComponent", function() { return PortalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortalPageComponent = class PortalPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
PortalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portal-page',
        template: __webpack_require__(/*! raw-loader!./portal-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/portal-page/portal-page.component.html"),
        styles: [__webpack_require__(/*! ./portal-page.component.less */ "./src/app/portal-page/portal-page.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PortalPageComponent);



/***/ }),

/***/ "./src/app/tab-navigator/tab-navigator.component.scss":
/*!************************************************************!*\
  !*** ./src/app/tab-navigator/tab-navigator.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody,\napp-root,\nexample-tarbar,\nexample-layout {\n  display: block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pMzE4NDQwL2dpdC9NaW5pTGlicmFyeS1Bbmd1bGFyL2Zyb250ZW5kL3NyYy9hcHAvdGFiLW5hdmlnYXRvci90YWItbmF2aWdhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWItbmF2aWdhdG9yL3RhYi1uYXZpZ2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0UsY0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RhYi1uYXZpZ2F0b3IvdGFiLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5LFxuYXBwLXJvb3QsXG5leGFtcGxlLXRhcmJhcixcbmV4YW1wbGUtbGF5b3V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn0iLCJodG1sLFxuYm9keSxcbmFwcC1yb290LFxuZXhhbXBsZS10YXJiYXIsXG5leGFtcGxlLWxheW91dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab-navigator/tab-navigator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tab-navigator/tab-navigator.component.ts ***!
  \**********************************************************/
/*! exports provided: TabNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavigatorComponent", function() { return TabNavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TabNavigatorComponent = class TabNavigatorComponent {
    constructor() {
        this.items = Array(20)
            .fill(0)
            .map((_v, i) => i);
    }
    ngOnInit() {
    }
    onSelect() {
        this.time = new Date().getTime();
    }
    onLoadMore(comp) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1500).subscribe(() => {
            this.items.push(...Array(10)
                .fill(this.items.length)
                .map((v, i) => v + i));
            if (this.items.length >= 50) {
                comp.setFinished();
                return;
            }
            comp.resolveLoading();
        });
    }
};
TabNavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tab-navigator',
        template: __webpack_require__(/*! raw-loader!./tab-navigator.component.html */ "./node_modules/raw-loader/index.js!./src/app/tab-navigator/tab-navigator.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./tab-navigator.component.scss */ "./src/app/tab-navigator/tab-navigator.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabNavigatorComponent);



/***/ }),

/***/ "./src/app/wechat-authorization/wechat-authorization.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/wechat-authorization/wechat-authorization.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlY2hhdC1hdXRob3JpemF0aW9uL3dlY2hhdC1hdXRob3JpemF0aW9uLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/wechat-authorization/wechat-authorization.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/wechat-authorization/wechat-authorization.component.ts ***!
  \************************************************************************/
/*! exports provided: WechatAuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WechatAuthorizationComponent", function() { return WechatAuthorizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WechatAuthorizationComponent = class WechatAuthorizationComponent {
    constructor(activeRouter, router) {
        this.activeRouter = activeRouter;
        this.router = router;
    }
    ngOnInit() {
        this.activeRouter.queryParams.subscribe(params => {
            // this.queryParams = params;
            const searchParamStr = window.location.search;
            const n = searchParamStr.indexOf('?code=') + 6;
            const m = searchParamStr.indexOf('&state=STATE');
            const code = searchParamStr.substr(n, m - 6);
            console.log('[coco test]: code:' + code);
            if (code.length > 0) {
                this.router.navigate(['/tabNavigator']);
            }
        });
    }
};
WechatAuthorizationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WechatAuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wechat-authorization',
        template: __webpack_require__(/*! raw-loader!./wechat-authorization.component.html */ "./node_modules/raw-loader/index.js!./src/app/wechat-authorization/wechat-authorization.component.html"),
        styles: [__webpack_require__(/*! ./wechat-authorization.component.less */ "./src/app/wechat-authorization/wechat-authorization.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WechatAuthorizationComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/i318440/git/MiniLibrary-Angular/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map