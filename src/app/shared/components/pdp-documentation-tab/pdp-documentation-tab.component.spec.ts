import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpDocumentationTabComponent } from './pdp-documentation-tab.component';

describe('PdpDocumentationTabComponent', () => {
  let component: PdpDocumentationTabComponent;
  let fixture: ComponentFixture<PdpDocumentationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpDocumentationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpDocumentationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
