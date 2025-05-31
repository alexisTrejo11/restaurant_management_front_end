// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'restaurant-app';
}

// models/restaurant.models.ts
export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients?: string[];
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface RestaurantInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  specialties: string[];
  awards?: string[];
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

// services/restaurant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Dish, RestaurantInfo, Reservation } from '../models/restaurant.models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'your-api-url-here'; // Replace with your actual API URL
  private selectedDishSubject = new BehaviorSubject<Dish | null>(null);
  
  constructor(private http: HttpClient) {}

  // Menu API calls
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiUrl}/dishes`);
  }

  getDishesByCategory(category: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiUrl}/dishes?category=${category}`);
  }

  getDishById(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${this.apiUrl}/dishes/${id}`);
  }

  // Restaurant info
  getRestaurantInfo(): Observable<RestaurantInfo> {
    return this.http.get<RestaurantInfo>(`${this.apiUrl}/restaurant-info`);
  }

  // Reservations
  submitReservation(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, reservation);
  }

  // Selected dish for details
  setSelectedDish(dish: Dish) {
    this.selectedDishSubject.next(dish);
  }

  getSelectedDish(): Observable<Dish | null> {
    return this.selectedDishSubject.asObservable();
  }
}

// components/shared/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <h2>Bella Vista</h2>
        </div>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/menu" routerLinkActive="active">Menu</a>
          <a routerLink="/reservation" routerLinkActive="active">Reservations</a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo h2 {
      color: #2c1810;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      margin: 0;
      font-size: 1.8rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      text-decoration: none;
      color: #2c1810;
      font-weight: 500;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #d4a574;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 50%;
      background: linear-gradient(90deg, #d4a574, #b8956a);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 1rem;
      }
      
      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent {}

// components/shared/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Bella Vista</h3>
          <p>Experience culinary excellence in the heart of the city</p>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>123 Culinary Street</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@bellavista.com</p>
        </div>
        <div class="footer-section">
          <h4>Hours</h4>
          <p>Mon-Thu: 5:00 PM - 10:00 PM</p>
          <p>Fri-Sat: 5:00 PM - 11:00 PM</p>
          <p>Sun: 4:00 PM - 9:00 PM</p>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Bella Vista Restaurant. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #2c1810 0%, #1a0f08 100%);
      color: #f5f5f5;
      margin-top: auto;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .footer-section h3,
    .footer-section h4 {
      color: #d4a574;
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .footer-section h4 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    .footer-section p {
      margin-bottom: 0.5rem;
      color: #e0e0e0;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-links a {
      color: #d4a574;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: #b8956a;
    }

    .footer-bottom {
      border-top: 1px solid #444;
      padding: 1.5rem 2rem;
      text-align: center;
      color: #ccc;
    }

    @media (max-width: 768px) {
      .footer-container {
        padding: 2rem 1rem;
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class FooterComponent {}

// components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RestaurantService } from '../../services/restaurant.service';
import { RestaurantInfo } from '../../models/restaurant.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <div class="home-container">
      <app-header></app-header>
      
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Bella Vista</h1>
          <p class="hero-subtitle">Where Culinary Art Meets Exceptional Experience</p>
          <div class="hero-buttons">
            <button routerLink="/menu" class="btn btn-primary">View Menu</button>
            <button routerLink="/reservation" class="btn btn-secondary">Make Reservation</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-placeholder"></div>
        </div>
      </section>

      <!-- Restaurant Info Section -->
      <section class="restaurant-info" *ngIf="restaurantInfo">
        <div class="container">
          <div class="info-grid">
            <div class="info-card">
              <h2>Our Story</h2>
              <p>{{ restaurantInfo.description }}</p>
            </div>
            
            <div class="info-card">
              <h2>Specialties</h2>
              <div class="specialties">
                <span *ngFor="let specialty of restaurantInfo.specialties" class="specialty-tag">
                  {{ specialty }}
                </span>
              </div>
            </div>
            
            <div class="info-card">
              <h2>Visit Us</h2>
              <p class="address">{{ restaurantInfo.address }}</p>
              <p class="contact">{{ restaurantInfo.phone }}</p>
              <p class="contact">{{ restaurantInfo.email }}</p>
            </div>
            
            <div class="info-card">
              <h2>Hours</h2>
              <div class="hours">
                <div *ngFor="let hour of getHoursArray()" class="hour-item">
                  <span class="day">{{ hour.day }}:</span>
                  <span class="time">{{ hour.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #f8f6f0 0%, #e8e2d4 100%);
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="%23d4a574" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }

    .hero-content {
      flex: 1;
      max-width: 600px;
      z-index: 2;
      position: relative;
    }

    .hero-title {
      font-size: 4rem;
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      color: #2c1810;
      margin-bottom: 1rem;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: #6b5b4c;
      margin-bottom: 2rem;
      font-weight: 400;
      line-height: 1.5;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .btn-primary {
      background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(212, 165, 116, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(212, 165, 116, 0.4);
    }

    .btn-secondary {
      background: transparent;
      color: #2c1810;
      border: 2px solid #d4a574;
    }

    .btn-secondary:hover {
      background: #d4a574;
      color: white;
      transform: translateY(-2px);
    }

    .hero-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-placeholder {
      width: 400px;
      height: 300px;
      background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(212, 165, 116, 0.3);
      position: relative;
    }

    .image-placeholder::after {
      content: 'Restaurant Image';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: 600;
    }

    .restaurant-info {
      padding: 5rem 2rem;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .info-card {
      background: #f8f6f0;
      padding: 2rem;
      border-radius: 15px;
      border-left: 4px solid #d4a574;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(212, 165, 116, 0.2);
    }

    .info-card h2 {
      color: #2c1810;
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .info-card p {
      color: #6b5b4c;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }

    .specialties {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .specialty-tag {
      background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .hours {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .hour-item {
      display: flex;
      justify-content: space-between;
    }

    .day {
      font-weight: 600;
      color: #2c1810;
    }

    .time {
      color: #6b5b4c;
    }

    .address,
    .contact {
      color: #6b5b4c !important;
    }

    @media (max-width: 768px) {
      .hero {
        flex-direction: column;
        text-align: center;
        padding: 2rem 1rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .btn {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
      }

      .image-placeholder {
        width: 300px;
        height: 200px;
        margin-top: 2rem;
      }

      .restaurant-info {
        padding: 3rem 1rem;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  restaurantInfo: RestaurantInfo | null = null;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.loadRestaurantInfo();
  }

  loadRestaurantInfo() {
    // Mock data - replace with actual API call
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

    // Uncomment to use actual API
    // this.restaurantService.getRestaurantInfo().subscribe(
    //   data => this.restaurantInfo = data,
    //   error => console.error('Error loading restaurant info:', error)
    // );
  }

  getHoursArray() {
    if (!this.restaurantInfo) return [];
    return Object.entries(this.restaurantInfo.hours).map(([day, time]) => ({ day, time }));
  }
}

// components/menu/menu.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RestaurantService } from '../../services/restaurant.service';
import { Dish } from '../../models/restaurant.models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  template: `
    <div class="menu-container">
      <app-header></app-header>
      
      <main class="menu-main">
        <div class="menu-header">
          <h1>Our Menu</h1>
          <p>Discover our carefully curated selection of exceptional dishes</p>
        </div>

        <!-- Category Filter -->
        <div class="filter-section">
          <h3>Filter by Category</h3>
          <div class="filter-buttons">
            <button 
              class="filter-btn" 
              [class.active]="selectedCategory === ''"
              (click)="filterByCategory('')">
              All
            </button>
            <button 
              *ngFor="let category of categories" 
              class="filter-btn"
              [class.active]="selectedCategory === category"
              (click)="filterByCategory(category)">
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Dishes Grid -->
        <div class="dishes-grid" *ngIf="filteredDishes.length > 0">
          <div 
            *ngFor="let dish of filteredDishes" 
            class="dish-card"
            (click)="openDishDetails(dish)">
            <div class="dish-image">
              <div class="image-placeholder">{{ dish.name.charAt(0) }}</div>
              <div class="dish-badges">
                <span *ngIf="dish.isVegetarian" class="badge vegetarian">V</span>
                <span *ngIf="dish.isGlutenFree" class="badge gluten-free">GF</span>
              </div>
            </div>
            <div class="dish-content">
              <h3>{{ dish.name }}</h3>
              <p class="dish-description">{{ dish.description }}</p>
              <div class="dish-footer">
                <span class="dish-price">\${{ dish.price }}</span>
                <span class="dish-category">{{ dish.category }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div *ngIf="loading" class="loading">
          <div class="loading-spinner"></div>
          <p>Loading delicious dishes...</p>
        </div>

        <!-- Empty State -->
        <div *ngIf="!loading && filteredDishes.length === 0" class="empty-state">
          <h3>No dishes found</h3>
          <p>Try selecting a different category or check back later.</p>
        </div>
      </main>

      <!-- Dish Detail Modal -->
      <div *ngIf="selectedDish" class="modal-overlay" (click)="closeDishDetails()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <button class="modal-close" (click)="closeDishDetails()">&times;</button>
          <div class="modal-header">
            <div class="modal-image">
              <div class="image-placeholder large">{{ selectedDish.name.charAt(0) }}</div>
            </div>
            <div class="modal-info">
              <h2>{{ selectedDish.name }}</h2>
              <p class="modal-category">{{ selectedDish.category }}</p>
              <p class="modal-price">\${{ selectedDish.price }}</p>
              <div class="modal-badges">
                <span *ngIf="selectedDish.isVegetarian" class="badge vegetarian">Vegetarian</span>
                <span *ngIf="selectedDish.isGlutenFree" class="badge gluten-free">Gluten Free</span>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <p class="modal-description">{{ selectedDish.description }}</p>
            <div *ngIf="selectedDish.ingredients && selectedDish.ingredients.length > 0">
              <h4>Ingredients</h4>
              <div class="ingredients">
                <span *ngFor="let ingredient of selectedDish.ingredients" class="ingredient">
                  {{ ingredient }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .menu-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .menu-main {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .menu-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .menu-header h1 {
      font-size: 3rem;
      font-family: 'Playfair Display', serif;
      color: #2c1810;
      margin-bottom: 1rem;
    }

    .menu-header p {
      font-size: 1.2rem;
      color: #6b5b4c;
    }

    .filter-section {
      margin-bottom: 3rem;
      text-align: center;
    }

    .filter-section h3 {
      color: #2c1810;
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
    }

    .filter-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .filter-btn {
      padding: 0.7rem 1.5rem;
      border: 2px solid #d4a574;
      background: transparent;
      color: #2c1810;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(212, 165, 116, 0.3);
    }

    .dishes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .dish-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
      border: 1px solid #f0f0f0;
    }

    .dish-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 35px rgba(212, 165, 116, 0.2);
    }

    .dish-image {
      position: relative;
      height: 200px;
      background: linear-gradient(135deg, #f8f6f0 0%, #e8e2d4 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-placeholder {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      font-weight: bold;
    }

    .image-placeholder.large {
      width: 150px;
      height: 150px;
      font-size: 3rem;
    }

    .dish-badges {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      gap: 0.5rem;
    }

    .badge {
      padding: 0.3rem 0.6rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
      color: white;
    }

    .badge.vegetarian {
      background: #4caf50;
    }

    .badge.gluten-free {
      background: #ff9800;
    }

    .dish-content {
      padding: 1.5rem;
    }

    .dish-content h3 {
      color: #2c1810;
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .dish-description {
      color