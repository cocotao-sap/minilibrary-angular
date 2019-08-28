import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WechatAuthorizationComponent } from './wechat-authorization/wechat-authorization.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TabNavigatorComponent } from './tab-navigator/tab-navigator.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'wechatAuthorization', component: WechatAuthorizationComponent },
  { path: 'tabNavigator', component: TabNavigatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
