import { Component, input } from '@angular/core';
import { FormGroupComponent } from '../../shared/form-group/form-group.component';
import { FormSectionComponent } from "../../shared/form-section/form-section.component";

@Component({
  selector: 'app-reservation-details',
  imports: [FormGroupComponent, FormSectionComponent],
  templateUrl: './reservation-details.component.html',
  styleUrl: './reservation-details.component.css'
})
export class ReservationDetailsComponent {
  title = "Reservation Details";
  reservationHoursAllowed = input.required<number[]>();
  customerCapacitiesAllowed = input.required<number[]>();
}
