import { createReducer, on } from '@ngrx/store';
import { capacitiesActions } from '../actions/capacities.actions';
import { CapacityDTO } from '../../shared/dto/capacity.dto';

const initialState: CapacityDTO[] = [];

export const capacitiesReducer = createReducer(
  initialState,
  on(capacitiesActions.loadCapacitiesSuccess, (_, { capacities }): CapacityDTO[] => capacities)
);
