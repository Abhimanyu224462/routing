import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPassComponent } from './flight-pass.component';

describe('FlightPassComponent', () => {
  let component: FlightPassComponent;
  let fixture: ComponentFixture<FlightPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightPassComponent]
    });
    fixture = TestBed.createComponent(FlightPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
