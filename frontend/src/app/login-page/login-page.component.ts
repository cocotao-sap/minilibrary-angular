import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  wechatRedirectPath: string;

  constructor() { }

  ngOnInit() {
    this.wechatRedirectPath = this.initWechatRedirectPath();
  }

  initWechatRedirectPath(): string {
    let redirectPage = 'wechatAuthorization';
    let return_uri = 'http://www.ltvision123.com/' + redirectPage;
    let AppID = 'wx88094ad370bf30a8';
    let scope = 'snsapi_userinfo';
    let wechatPath = 'https://open.weixin.qq.com/connect/oauth2/authorize'
      + '?appid=' + AppID
      + '&redirect_uri=' + return_uri
      + '&response_type=code'
      + '&scope=' + scope
      + '&state=STATE#wechat_redirect';

    return wechatPath;
  }

}
