import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdAndHotComponent } from './cold-and-hot.component';

describe('ColdAndHotComponent', () => {
  let component: ColdAndHotComponent;
  let fixture: ComponentFixture<ColdAndHotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdAndHotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdAndHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
