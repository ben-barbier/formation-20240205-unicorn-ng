import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { unicornsActions } from '../actions/unicorns.actions';

@Injectable({ providedIn: 'root' })
export class UnicornsDispatchers {
  constructor(private store: Store) {}

  public getUnicorns(): void {
    this.store.dispatch(unicornsActions.getUnicorns());
  }

  public getUnicorn(id: number): void {
    this.store.dispatch(unicornsActions.getUnicorn({ id }));
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    this.store.dispatch(unicornsActions.deleteUnicorn({ unicorn }));
  }

  public updateUnicorn(unicorn: Unicorn): void {
    this.store.dispatch(unicornsActions.updateUnicorn({ unicorn }));
  }
}
