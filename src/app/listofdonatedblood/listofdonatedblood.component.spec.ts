import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofdonatedbloodComponent } from './listofdonatedblood.component';

describe('ListofdonatedbloodComponent', () => {
  let component: ListofdonatedbloodComponent;
  let fixture: ComponentFixture<ListofdonatedbloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofdonatedbloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofdonatedbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
