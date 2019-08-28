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

}
