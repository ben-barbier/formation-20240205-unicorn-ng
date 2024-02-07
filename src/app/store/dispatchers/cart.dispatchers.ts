import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartActions } from '../actions/cart.actions';
import { Unicorn } from '../../shared/models/unicorn.model';

@Injectable({ providedIn: 'root' })
export class CartDispatchers {
  constructor(private store: Store) {}

  public addUnicornToCart(unicorn: Unicorn): void {
    this.store.dispatch(cartActions.addToCart({ unicorn }));
  }

  public removeUnicornFromCart(unicorn: Unicorn): void {
    this.store.dispatch(cartActions.removeFromCart({ unicorn }));
  }

  public clearCart(): void {
    this.store.dispatch(cartActions.clearCart());
  }
}
