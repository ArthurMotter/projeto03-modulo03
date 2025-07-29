import { Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { SellersComponent } from './components/views/sellers/sellers.component';

// Routes configurations
export const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'sellers', 
    component: SellersComponent
  }
];


