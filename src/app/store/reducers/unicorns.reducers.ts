import { createReducer, on } from '@ngrx/store';
import { unicornsActions } from '../actions/unicorns.actions';
import { UnicornDTO } from '../../shared/dto/unicorn.dto';

const initialState: UnicornDTO[] = [];

export const unicornsReducer = createReducer(
  initialState,
  on(unicornsActions.getUnicornsSuccess, (_, { unicorns }): UnicornDTO[] => unicorns),
  on(unicornsActions.updateUnicornSuccess, (state, { unicorn }) => state.map(u => (u.id === unicorn.id ? unicorn : u))),
  on(unicornsActions.deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
  on(unicornsActions.getUnicornSuccess, (state, { unicorn }) => {
    const unicornIsPresent = state.some(u => u.id === unicorn.id);
    if (unicornIsPresent) {
      return state.map(u => (u.id === unicorn.id ? unicorn : u));
    } else {
      return state.concat(unicorn);
    }
  })
);
