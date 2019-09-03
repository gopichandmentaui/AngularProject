import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpSpecificationTabComponent } from './pdp-specification-tab.component';

describe('PdpSpecificationTabComponent', () => {
  let component: PdpSpecificationTabComponent;
  let fixture: ComponentFixture<PdpSpecificationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpSpecificationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpSpecificationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
