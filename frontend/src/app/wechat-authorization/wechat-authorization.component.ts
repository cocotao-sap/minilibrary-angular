import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wechat-authorization',
  templateUrl: './wechat-authorization.component.html',
  styleUrls: ['./wechat-authorization.component.less']
})
export class WechatAuthorizationComponent implements OnInit {

  private queryParams: any;
  constructor(public activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe(params => {
      this.queryParams = params;
      console.log('[coco test]: queryParams:' + params as string);
    });
  }

}
