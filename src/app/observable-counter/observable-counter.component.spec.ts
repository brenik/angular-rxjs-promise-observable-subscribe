import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCounterComponent } from './observable-counter.component';

describe('ObservableCounterComponent', () => {
  let component: ObservableCounterComponent;
  let fixture: ComponentFixture<ObservableCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
