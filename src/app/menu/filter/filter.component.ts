import { Component, input, output } from '@angular/core';
import { Category } from '../menu.model';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  categories = input.required<Category[]>();
  filterByCategory = output<string>();

  selectedCategory:Category | null = null; 

  OnSelectCategory(categoryId: number) {
    if (categoryId === 0) {
      this.selectedCategory = null;
      this.filterByCategory.emit("All");
    } else {
      this.selectedCategory = this.categories().find(category => category.id === categoryId)!;
      this.filterByCategory.emit(this.selectedCategory!.name);
    }
  }

 
}