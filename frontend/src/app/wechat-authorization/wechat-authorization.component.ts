import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wechat-authorization',
  templateUrl: './wechat-authorization.component.html',
  styleUrls: ['./wechat-authorization.component.less']
})
export class WechatAuthorizationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const searchParamStr = window.location.search;
    const n = searchParamStr.indexOf('?code=') + 6;
    const m = searchParamStr.indexOf('&state=STATE');
    const code = searchParamStr.substr(n, m - 6);
    console.log('[coco test]: code:' + code as string);
  }

}
