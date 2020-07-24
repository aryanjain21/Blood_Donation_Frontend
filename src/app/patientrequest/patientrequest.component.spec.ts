import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientrequestComponent } from './patientrequest.component';

describe('PatientrequestComponent', () => {
  let component: PatientrequestComponent;
  let fixture: ComponentFixture<PatientrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
