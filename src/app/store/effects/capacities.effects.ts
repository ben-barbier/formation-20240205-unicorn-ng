import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { capacitiesActions } from '../actions/capacities.actions';
import { CapacitiesService } from '../../shared/services/capacities.service';

@Injectable()
export class CapacitiesEffects {
  constructor(
    private actions$: Actions,
    private capacitiesService: CapacitiesService
  ) {}

  loadCapacities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(capacitiesActions.loadCapacities),
      switchMap(() =>
        this.capacitiesService.getCapacities().pipe(
          map(capacities => capacitiesActions.loadCapacitiesSuccess({ capacities })),
          catchError(() => of(capacitiesActions.loadCapacitiesError()))
        )
      )
    );
  });
}
