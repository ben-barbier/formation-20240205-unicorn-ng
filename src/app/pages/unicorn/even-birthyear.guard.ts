import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { inject } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { Observable } from 'rxjs';

export const evenBirthyearGuard: CanActivateFn = (route): Observable<true | UrlTree> => {
  const unicornId = route.params['id'];
  const unicornService = inject(UnicornsService);
  const router = inject(Router);

  return unicornService
    .getUnicorn(unicornId)
    .pipe(map(unicorn => (unicorn.birthyear % 2 === 0 ? true : router.createUrlTree(['/not-found']))));
};
