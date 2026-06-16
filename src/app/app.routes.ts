import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'properties',
    loadComponent: () => import('./pages/properties/properties').then(m => m.Properties)
  },
  {
    path: 'properties/:id',
    loadComponent: () => import('./pages/property-details/property-details').then(m => m.PropertyDetails)
  },
  {
    path: '**',
    redirectTo: ''
  }
];