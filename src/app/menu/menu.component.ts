import { Component, input, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { Category, Dish } from './menu.model';
import { MenuService } from './menu.service';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { FilterComponent } from "./filter/filter.component";
import { DishGridComponent } from './dish-grid/dish-grid.component';

@Component({
  selector: 'app-menu',
  imports: [HeaderComponent, FooterComponent, DishDetailComponent, FilterComponent, FilterComponent, DishGridComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  categories:Category[] | null = null; 
  selectedCategory:Category | null  = null; 
  dishes:Dish[] = [];
  selectedDish: Dish | null = null;
  loading = true;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadMenu();
  }

  loadCategories() {
    this.categories = this.menuService.getCategories();
    console.log(`loading categories: ${this.categories?.length}`);
  }

  loadMenu() {
    this.dishes = this.menuService.getMenu();
    console.log(`loading categories: ${this.categories?.length}`);
  }

  filterByCategory(categoryName: string) {
    console.log(categoryName)
    if (categoryName === "All") {
      this.dishes = this.menuService.getMenu();    
    } else {
      this.dishes = this.menuService.getMenuByCategory(categoryName)
    }
  }

  openDishDetails(dish: Dish) {
    console.log(`new Dish ${dish.id}`)
    this.selectedDish = dish; 
  }

  closeDishDeatil() {
      this.selectedDish = null;
  }

}
