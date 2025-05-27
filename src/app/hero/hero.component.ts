import { Component, input, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { RestaurantInfo } from '../models/restaurant_info';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  restaurantInfo: RestaurantInfo | null = null;

  ngOnInit(): void {
    this.loadRestaurantInfo();
  }

  // Place Holder
  loadRestaurantInfo() {
    this.restaurantInfo = {
      name: 'Bella Vista',
      description: 'A culinary journey through authentic flavors and modern gastronomy. Our chefs craft each dish with passion, using only the finest local ingredients to create unforgettable dining experiences.',
      address: '123 Culinary Street, Gourmet District, City 12345',
      phone: '(555) 123-4567',
      email: 'info@bellavista.com',
      hours: {
        'Monday': '5:00 PM - 10:00 PM',
        'Tuesday': '5:00 PM - 10:00 PM',
        'Wednesday': '5:00 PM - 10:00 PM',
        'Thursday': '5:00 PM - 10:00 PM',
        'Friday': '5:00 PM - 11:00 PM',
        'Saturday': '5:00 PM - 11:00 PM',
        'Sunday': '4:00 PM - 9:00 PM'
      },
      specialties: ['Italian Cuisine', 'Fresh Seafood', 'Artisan Pasta', 'Wine Selection'],
      awards: ['Best Restaurant 2024', 'Excellence Award']
    };
  }
 
  getHoursArray() {
    if (!this.restaurantInfo) return [];
    return Object.entries(this.restaurantInfo.hours).map(([day, time]) => ({ day, time }));
  }
}
