import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { UnicornsComponent } from './pages/unicorns/unicorns.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { NavComponent } from './layout/nav/nav.component';
import { UnicornComponent } from './pages/unicorn/unicorn.component';
import { evenBirthyearGuard } from './pages/unicorn/even-birthyear.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'unicorns', component: UnicornsComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'cart', component: CartComponent },
      { path: 'unicorn/:id', component: UnicornComponent, canActivate: [evenBirthyearGuard] },
      { path: 'not-found', component: NotFoundComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
