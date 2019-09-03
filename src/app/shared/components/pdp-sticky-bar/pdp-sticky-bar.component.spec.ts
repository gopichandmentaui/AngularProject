import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpStickyBarComponent } from './pdp-sticky-bar.component';

describe('PdpStickyBarComponent', () => {
  let component: PdpStickyBarComponent;
  let fixture: ComponentFixture<PdpStickyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpStickyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpStickyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
