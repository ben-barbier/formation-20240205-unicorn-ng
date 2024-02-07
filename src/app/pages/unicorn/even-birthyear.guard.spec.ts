import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { evenBirthyearGuard } from './even-birthyear.guard';

describe('evenBirthyearGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => evenBirthyearGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
