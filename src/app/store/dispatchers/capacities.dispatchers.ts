import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { capacitiesActions } from '../actions/capacities.actions';

@Injectable({ providedIn: 'root' })
export class CapacitiesDispatchers {
  constructor(private store: Store) {}

  public loadCapacities(): void {
    this.store.dispatch(capacitiesActions.loadCapacities());
  }
}
