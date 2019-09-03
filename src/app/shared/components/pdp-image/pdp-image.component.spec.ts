import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpImageComponent } from './pdp-image.component';

describe('PdpImageComponent', () => {
  let component: PdpImageComponent;
  let fixture: ComponentFixture<PdpImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
