import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpLongDescriptionComponent } from './pdp-long-description.component';

describe('PdpLongDescriptionComponent', () => {
  let component: PdpLongDescriptionComponent;
  let fixture: ComponentFixture<PdpLongDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpLongDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpLongDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
