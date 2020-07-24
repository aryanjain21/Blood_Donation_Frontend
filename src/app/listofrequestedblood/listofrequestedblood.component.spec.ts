import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofrequestedbloodComponent } from './listofrequestedblood.component';

describe('ListofrequestedbloodComponent', () => {
  let component: ListofrequestedbloodComponent;
  let fixture: ComponentFixture<ListofrequestedbloodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofrequestedbloodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofrequestedbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
