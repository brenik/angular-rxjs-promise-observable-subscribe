import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeFunctionComponent } from './pipe-function.component';

describe('PipeFunctionComponent', () => {
  let component: PipeFunctionComponent;
  let fixture: ComponentFixture<PipeFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
