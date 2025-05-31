import { Component } from '@angular/core';
import { FormGroupComponent } from "../../shared/form-group/form-group.component";
import { FormSectionComponent } from "../../shared/form-section/form-section.component";

@Component({
  selector: 'app-reservation-special-requests',
  imports: [FormGroupComponent, FormSectionComponent],
  templateUrl: './reservation-special-requests.component.html',
  styleUrl: './reservation-special-requests.component.css'
})
export class ReservationSpecialRequestsComponent {

}
