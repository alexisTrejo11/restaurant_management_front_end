import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'menu', component: MenuComponent },
    { path: 'reservation', component: ReservationsComponent },
    
];
