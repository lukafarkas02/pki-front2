import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesListComponent } from './certificates-list.component';

describe('CertificatesListComponent', () => {
  let component: CertificatesListComponent;
  let fixture: ComponentFixture<CertificatesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatesListComponent]
    });
    fixture = TestBed.createComponent(CertificatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
