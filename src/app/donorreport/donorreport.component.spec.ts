import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorreportComponent } from './donorreport.component';

describe('DonorreportComponent', () => {
  let component: DonorreportComponent;
  let fixture: ComponentFixture<DonorreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
