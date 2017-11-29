import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClbComponent } from './clb.component';

describe('ClbComponent', () => {
  let component: ClbComponent;
  let fixture: ComponentFixture<ClbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
