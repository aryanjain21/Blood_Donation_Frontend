import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcampComponent } from './editcamp.component';

describe('EditcampComponent', () => {
  let component: EditcampComponent;
  let fixture: ComponentFixture<EditcampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
