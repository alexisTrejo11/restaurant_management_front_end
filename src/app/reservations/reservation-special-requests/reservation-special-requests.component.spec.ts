import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSpecialRequestsComponent } from './reservation-special-requests.component';

describe('ReservationSpecialRequestsComponent', () => {
  let component: ReservationSpecialRequestsComponent;
  let fixture: ComponentFixture<ReservationSpecialRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationSpecialRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationSpecialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
