import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeuntilComponent } from './takeuntil.component';

describe('TakeuntilComponent', () => {
  let component: TakeuntilComponent;
  let fixture: ComponentFixture<TakeuntilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeuntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeuntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
