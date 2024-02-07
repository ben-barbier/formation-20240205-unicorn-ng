import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { selectCapacities } from './capacities.selectors';
import { CapacityDTO } from '../../shared/dto/capacity.dto';
import { UnicornDTO } from '../../shared/dto/unicorn.dto';

// selectors
const selectUnicorns = createFeatureSelector<UnicornDTO[]>('unicorns');
const selectUnicornsWithCapacities = createSelector(
  selectUnicorns,
  selectCapacities,
  (unicorns: UnicornDTO[], capacities: CapacityDTO[]): Unicorn[] =>
    unicorns.map(unicorn => ({
      ...unicorn,
      capacitiesLabels: unicorn.capacities.map(id => capacities.find(c => c.id === id)?.label || ''),
    }))
);
const selectUnicorn = (id: number) =>
  createSelector(selectUnicornsWithCapacities, (unicorns: Unicorn[]) => unicorns.find(u => u.id === id));

@Injectable({ providedIn: 'root' })
export class UnicornsSelectors {
  constructor(private store: Store) {}

  unicorns$ = this.store.select(selectUnicornsWithCapacities);
  unicorn$ = (id: number) => this.store.select(selectUnicorn(id));
}
