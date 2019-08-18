import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WechatAuthorizationComponent } from './wechat-authorization.component';

describe('WechatAuthorizationComponent', () => {
  let component: WechatAuthorizationComponent;
  let fixture: ComponentFixture<WechatAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WechatAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WechatAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
