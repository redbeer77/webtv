import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsMenuComponent } from './channels-menu.component';

describe('ChannelsMenuComponent', () => {
  let component: ChannelsMenuComponent;
  let fixture: ComponentFixture<ChannelsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
