import { Component, input, output } from '@angular/core';
import { Dish } from '../menu.model';

@Component({
  selector: 'app-dish-grid',
  imports: [],
  templateUrl: './dish-grid.component.html',
  styleUrl: './dish-grid.component.css'
})
export class DishGridComponent {
  dishes = input.required<Dish[]>();
  openDishDetail = output<Dish>();

  onOpenDishDetail(dish: Dish) {
    console.log(dish.name)
    this.openDishDetail.emit(dish);
  }
}
