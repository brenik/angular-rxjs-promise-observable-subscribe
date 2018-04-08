import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableUnicastComponent } from './observable-unicast.component';

describe('ObservableUnicastComponent', () => {
  let component: ObservableUnicastComponent;
  let fixture: ComponentFixture<ObservableUnicastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableUnicastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableUnicastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
