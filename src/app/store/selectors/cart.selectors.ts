import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { selectUnicornsWithCapacities } from './unicorns.selectors';

// selectors
export const selectCart = createFeatureSelector<number[]>('cart');
const selectCartUnicorns = createSelector(selectCart, selectUnicornsWithCapacities, (cart, unicorns) =>
  unicorns.filter(u => cart.includes(u.id))
);
const selectUnicornIsInCart = (id: number) => createSelector(selectCart, cart => cart.includes(id));

@Injectable({ providedIn: 'root' })
export class CartSelectors {
  constructor(private store: Store) {}

  cartUnicorn$ = this.store.select(selectCartUnicorns);
  unicornIsInCart$ = (id: number) => this.store.select(selectUnicornIsInCart(id));
}
