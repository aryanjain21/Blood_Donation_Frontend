import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedmanagerComponent } from './approvedmanager.component';

describe('ApprovedmanagerComponent', () => {
  let component: ApprovedmanagerComponent;
  let fixture: ComponentFixture<ApprovedmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
