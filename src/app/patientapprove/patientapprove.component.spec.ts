import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientapproveComponent } from './patientapprove.component';

describe('PatientapproveComponent', () => {
  let component: PatientapproveComponent;
  let fixture: ComponentFixture<PatientapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
