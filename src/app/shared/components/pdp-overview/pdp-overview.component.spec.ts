import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpOverviewComponent } from './pdp-overview.component';

describe('PdpOverviewComponent', () => {
  let component: PdpOverviewComponent;
  let fixture: ComponentFixture<PdpOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
