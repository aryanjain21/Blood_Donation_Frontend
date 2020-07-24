import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorhistoryComponent } from './donorhistory.component';

describe('DonorhistoryComponent', () => {
  let component: DonorhistoryComponent;
  let fixture: ComponentFixture<DonorhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
