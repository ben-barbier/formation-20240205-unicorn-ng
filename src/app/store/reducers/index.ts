import { ActionReducerMap } from '@ngrx/store';
import { unicornsReducer } from './unicorns.reducers';
import { UnicornDTO } from '../../shared/dto/unicorn.dto';

export interface EntityState {
  unicorns: UnicornDTO[];
  // cart: number[]; // Identifiants de licornes
}

export const reducers: ActionReducerMap<EntityState> = {
  unicorns: unicornsReducer,
  // cart: cartReducer,
  // here is where i put other reducers, when i have them
};
