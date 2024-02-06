import { Routes } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';
import { evenBirthyearGuard } from './pages/unicorn/even-birthyear.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/landing/landing.component') },
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'unicorn/:id',
        loadComponent: () => import('./pages/unicorn/unicorn.component'),
        canActivate: [evenBirthyearGuard],
      },
      { path: 'unicorns', loadComponent: () => import('./pages/unicorns/unicorns.component') },
      { path: 'admin', loadComponent: () => import('./pages/admin/admin.component') },
      { path: 'cart', loadComponent: () => import('./pages/cart/cart.component') },
      { path: 'not-found', loadComponent: () => import('./pages/not-found/not-found.component') },
    ],
  },
  { path: '**', redirectTo: '' },
];
