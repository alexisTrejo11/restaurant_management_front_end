import { Component, input, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { Category, Dish } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    this.loadCategories();
  }

  constructor(private menuService: MenuService) {}

  categories:Category[] | null = null; 
  selectedCategory:Category | null  = null; 
  filteredDishes:Dish[] = [];
  selectedDish: Dish | null = null;
  loading = false;

  loadCategories() {
    this.categories = this.menuService.getCategories()
    console.log(`loading categories: ${this.categories?.length}`)
  }

  openDishDetails(dish: Dish) {
    this.selectedDish = dish; 
  }

  filterByCategory(categoryId: number) {
    if (categoryId === 0) {
      this.selectedCategory = null;
    }else {
      this.selectedCategory = this.categories!.find(category => category.id === categoryId)!;
    }
  }
}
