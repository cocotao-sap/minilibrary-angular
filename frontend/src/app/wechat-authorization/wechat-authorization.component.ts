import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wechat-authorization',
  templateUrl: './wechat-authorization.component.html',
  styleUrls: ['./wechat-authorization.component.less']
})
export class WechatAuthorizationComponent implements OnInit {

  constructor() {
    alert('wechatAuthorization constructor called');
  }

  ngOnInit() {
    alert('wechatAuthorization onInit called');
  }

}
