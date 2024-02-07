import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { unicornsActions } from '../actions/unicorns.actions';

@Injectable()
export class UnicornsEffects {
  constructor(
    private actions$: Actions,
    private unicornsService: UnicornsService
  ) {}

  getUnicorns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(unicornsActions.getUnicorns),
      switchMap(() =>
        this.unicornsService.getAllWithCapacitiesLabels().pipe(
          map(unicorns => unicornsActions.getUnicornsSuccess({ unicorns })),
          catchError(() => of(unicornsActions.getUnicornsError()))
        )
      )
    );
  });

  getUnicorn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(unicornsActions.getUnicorn),
      switchMap(action =>
        this.unicornsService.get(action.id).pipe(
          map(unicorn => unicornsActions.getUnicornSuccess({ unicorn })),
          catchError(() => of(unicornsActions.getUnicornError()))
        )
      )
    );
  });

  updateUnicorn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(unicornsActions.updateUnicorn),
      switchMap(action =>
        this.unicornsService.update(action.unicorn).pipe(
          map(() => unicornsActions.updateUnicornSuccess({ unicorn: action.unicorn })),
          catchError(() => of(unicornsActions.updateUnicornError()))
        )
      )
    );
  });

  deleteUnicorn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(unicornsActions.deleteUnicorn),
      switchMap(action =>
        this.unicornsService.delete(action.unicorn).pipe(
          map(() => unicornsActions.deleteUnicornSuccess({ unicorn: action.unicorn })),
          catchError(() => of(unicornsActions.deleteUnicornError()))
        )
      )
    );
  });
}
