import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeUiModule } from 'ngx-weui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalPageComponent } from './portal-page/portal-page.component';
import { TabNavigatorComponent } from './tab-navigator/tab-navigator.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WechatAuthorizationComponent } from './wechat-authorization/wechat-authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalPageComponent,
    TabNavigatorComponent,
    LoginPageComponent,
    WechatAuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeUiModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
