import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { ReservationDetailsComponent } from "./reservation-details/reservation-details.component";
import { ReservationSpecialRequestsComponent } from "./reservation-special-requests/reservation-special-requests.component";
import { FormGroupComponent } from '../shared/form-group/form-group.component';

@Component({
  selector: 'app-reservations',
  imports: [HeaderComponent, PersonalInformationComponent, ReservationDetailsComponent, ReservationSpecialRequestsComponent, FormGroupComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {
  OPENING_HOUR = 12;
  LAST_HOUR_ALLOWED_TO_BOOK = 20;
  isSubmiting = false;


  getGuestNumbers(): number[] {
    return Array.from({length: 10}, (_, i) => i + 1);
  }


  getScheduleByHours(): number[] {
    return Array.from({length: this.LAST_HOUR_ALLOWED_TO_BOOK}, (_, OPENING_HOUR) => OPENING_HOUR + 1);
  }


}
