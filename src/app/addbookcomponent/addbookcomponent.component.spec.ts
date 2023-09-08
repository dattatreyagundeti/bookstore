import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookcomponentComponent } from './addbookcomponent.component';

describe('AddbookcomponentComponent', () => {
  let component: AddbookcomponentComponent;
  let fixture: ComponentFixture<AddbookcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbookcomponentComponent]
    });
    fixture = TestBed.createComponent(AddbookcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
