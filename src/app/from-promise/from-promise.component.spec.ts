import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPromiseComponent } from './from-promise.component';

describe('FromPromiseComponent', () => {
  let component: FromPromiseComponent;
  let fixture: ComponentFixture<FromPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
