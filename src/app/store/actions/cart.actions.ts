import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    addToCart: props<{ unicorn: Unicorn }>(),
    removeFromCart: props<{ unicorn: Unicorn }>(),
    clearCart: emptyProps(),
  },
});
