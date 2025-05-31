import { Injectable } from "@angular/core";
import { Category } from "./menu.model";


@Injectable({"providedIn": "root" })
export class MenuService {
    menu = [
      {
        id: 1,
        name: 'Truffle Risotto',
        description: 'Creamy arborio rice with black truffle, parmesan cheese, and fresh herbs',
        price: 28,
        category: 'Main Course',
        image: '',
        ingredients: ['Arborio Rice', 'Black Truffle', 'Parmesan', 'White Wine', 'Vegetable Stock'],
        isVegetarian: true,
        isGlutenFree: true
      },
      {
        id: 2,
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
        price: 32,
        category: 'Main Course',
        image: '',
        ingredients: ['Atlantic Salmon', 'Lemon', 'Butter', 'Asparagus', 'Cherry Tomatoes'],
        isVegetarian: false,
        isGlutenFree: true
      },
      {
        id: 3,
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with house-made Caesar dressing and croutons',
        price: 16,
        category: 'Appetizer',
        image: '',
        ingredients: ['Romaine Lettuce', 'Parmesan', 'Croutons', 'Caesar Dressing'],
        isVegetarian: true,
        isGlutenFree: false
      },
      {
        id: 4,
        name: 'Chocolate Fondant',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: 12,
        category: 'Dessert',
        image: '',
        ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Flour', 'Vanilla Ice Cream'],
        isVegetarian: true,
        isGlutenFree: false
      },
      {
        id: 5,
        name: 'Beef Tenderloin',
        description: 'Premium cut beef with red wine reduction and roasted vegetables',
        price: 45,
        category: 'Main Course',
        image: '',
        ingredients: ['Beef Tenderloin', 'Red Wine', 'Carrots', 'Potatoes', 'Herbs'],
        isVegetarian: false,
        isGlutenFree: true
      },
      {
        id: 6,
        name: 'Burrata Caprese',
        description: 'Fresh burrata cheese with heirloom tomatoes and basil',
        price: 18,
        category: 'Appetizer',
        image: '',
        ingredients: ['Burrata Cheese', 'Heirloom Tomatoes', 'Fresh Basil', 'Olive Oil'],
        isVegetarian: true,
        isGlutenFree: true
      }
    ];  
  
  getMenu() {
      return this.menu;
  }


  getMenuByCategory(categoryName: string) {
    return this.menu.filter(dish => dish.category === categoryName)!;

  }

    getCategories(): Category[] {
      return [ 
          {"id": 1 , "name": 'Appetizer'},
          {"id": 2 , "name": 'Main Course'},
          {"id": 3 , "name": 'Dessert'}
      ]
    }
}