import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonormedicaldetailsComponent } from './donormedicaldetails.component';

describe('DonormedicaldetailsComponent', () => {
  let component: DonormedicaldetailsComponent;
  let fixture: ComponentFixture<DonormedicaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonormedicaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonormedicaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
