import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakewhileComponent } from './takewhile.component';

describe('TakewhileComponent', () => {
  let component: TakewhileComponent;
  let fixture: ComponentFixture<TakewhileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakewhileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakewhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
