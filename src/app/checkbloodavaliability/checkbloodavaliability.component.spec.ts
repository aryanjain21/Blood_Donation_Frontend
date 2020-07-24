import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbloodavaliabilityComponent } from './checkbloodavaliability.component';

describe('CheckbloodavaliabilityComponent', () => {
  let component: CheckbloodavaliabilityComponent;
  let fixture: ComponentFixture<CheckbloodavaliabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbloodavaliabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbloodavaliabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
