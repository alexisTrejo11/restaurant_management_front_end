import { Component } from '@angular/core';
import { FormGroupComponent } from "../../shared/form-group/form-group.component";
import { FormSectionComponent } from "../../shared/form-section/form-section.component";

@Component({
  selector: 'app-personal-information',
  imports: [FormGroupComponent, FormSectionComponent],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  title ="Personal Information";
}
