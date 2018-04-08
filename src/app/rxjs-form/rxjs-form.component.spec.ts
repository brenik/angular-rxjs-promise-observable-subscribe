import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFormComponent } from './rxjs-form.component';

describe('RxjsFormComponent', () => {
  let component: RxjsFormComponent;
  let fixture: ComponentFixture<RxjsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
