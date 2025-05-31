import { Component, input, output } from '@angular/core';
import { Dish } from '../menu.model';

@Component({
  selector: 'app-dish-detail',
  imports: [],
  templateUrl: './dish-detail.component.html',
  styleUrl: './dish-detail.component.css'
})
export class DishDetailComponent {
  dish = input.required<Dish>();
  closeModal = output<void>();

  onCloseModal() {
    this.closeModal.emit();
  } 
}
