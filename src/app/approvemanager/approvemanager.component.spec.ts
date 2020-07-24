import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovemanagerComponent } from './approvemanager.component';

describe('ApprovemanagerComponent', () => {
  let component: ApprovemanagerComponent;
  let fixture: ComponentFixture<ApprovemanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovemanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovemanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
