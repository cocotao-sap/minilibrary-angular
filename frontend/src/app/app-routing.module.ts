import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WechatAuthorizationComponent} from './wechat-authorization/wechat-authorization.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'wechatAuthorization', component: WechatAuthorizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
