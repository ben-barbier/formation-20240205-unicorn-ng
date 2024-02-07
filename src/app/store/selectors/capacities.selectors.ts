import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { CapacityDTO } from '../../shared/dto/capacity.dto';

// selectors
export const selectCapacities = createFeatureSelector<CapacityDTO[]>('capacities');
const selectCapacity = (id: number) =>
  createSelector(selectCapacities, (state: CapacityDTO[]) => state.find(c => c.id === id));

@Injectable({ providedIn: 'root' })
export class UnicornsSelectors {
  constructor(private store: Store) {}

  capacities$ = this.store.select(selectCapacities);
  capacity$ = (id: number) => this.store.select(selectCapacity(id));
}
