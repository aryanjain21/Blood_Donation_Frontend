import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofallpatientComponent } from './listofallpatient.component';

describe('ListofallpatientComponent', () => {
  let component: ListofallpatientComponent;
  let fixture: ComponentFixture<ListofallpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofallpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofallpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
