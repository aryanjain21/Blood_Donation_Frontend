import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofalldonorsComponent } from './listofalldonors.component';

describe('ListofalldonorsComponent', () => {
  let component: ListofalldonorsComponent;
  let fixture: ComponentFixture<ListofalldonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofalldonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofalldonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
