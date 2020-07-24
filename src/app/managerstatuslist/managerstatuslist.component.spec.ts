import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerstatuslistComponent } from './managerstatuslist.component';

describe('ManagerstatuslistComponent', () => {
  let component: ManagerstatuslistComponent;
  let fixture: ComponentFixture<ManagerstatuslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerstatuslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerstatuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
