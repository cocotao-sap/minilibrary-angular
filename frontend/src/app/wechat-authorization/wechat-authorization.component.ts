import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-wechat-authorization',
  templateUrl: './wechat-authorization.component.html',
  styleUrls: ['./wechat-authorization.component.less']
})
export class WechatAuthorizationComponent implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.activeRouter.queryParams.subscribe( params => {
      // this.queryParams = params;
      const searchParamStr = window.location.search;
      const n = searchParamStr.indexOf('?code=') + 6;
      const m = searchParamStr.indexOf('&state=STATE');
      const code = searchParamStr.substr(n, m - 6);
      console.log('[coco test]: code:' + code as string);

      if (code.length > 0) {
        this.router.navigate(['/tabNavigator']);
      }

    });
  }

}
