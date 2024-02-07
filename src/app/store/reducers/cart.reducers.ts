import { createReducer, on } from '@ngrx/store';
import { cartActions } from '../actions/cart.actions';
import { unicornsActions } from '../actions/unicorns.actions';

const initialState: number[] = [];

export const cartReducer = createReducer(
  initialState,
  on(cartActions.addToCart, (state, { unicorn }) => state.concat(unicorn.id)),
  on(cartActions.removeFromCart, unicornsActions.deleteUnicornSuccess, (state, { unicorn }): number[] =>
    state.filter(unicornId => unicornId !== unicorn.id)
  ),
  on(cartActions.clearCart, () => initialState),
  on(unicornsActions.deleteUnicornSuccess, state => state)
);
