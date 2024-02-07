import { ActionReducerMap } from '@ngrx/store';
import { unicornsReducer } from './unicorns.reducers';
import { UnicornDTO } from '../../shared/dto/unicorn.dto';
import { capacitiesReducer } from './capacities.reducers';
import { CapacityDTO } from '../../shared/dto/capacity.dto';

export interface EntityState {
  unicorns: UnicornDTO[];
  capacities: CapacityDTO[];
  // cart: number[]; // Identifiants de licornes
}

export const reducers: ActionReducerMap<EntityState> = {
  unicorns: unicornsReducer,
  capacities: capacitiesReducer,
  // cart: cartReducer,
  // here is where i put other reducers, when i have them
};
