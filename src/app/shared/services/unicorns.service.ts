import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatAll, filter, from, mergeMap, Observable, toArray } from 'rxjs';
import { UnicornDTO } from '../dto/unicorn.dto';
import { map } from 'rxjs/operators';
import { CapacitiesService } from './capacities.service';
import { Unicorn } from '../models/unicorn.model';
import { CapacityDTO } from '../dto/capacity.dto';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(
    private http: HttpClient,
    private capacitiesService: CapacitiesService
  ) {}

  public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
    return this.getUnicorns().pipe(
      concatAll(),
      mergeMap((unicorn: UnicornDTO): Observable<Unicorn> => {
        const capacitiesIds = unicorn.capacities;

        return from(capacitiesIds).pipe(
          // 2, 6 (capacity ID)
          mergeMap(capacityId => this.capacitiesService.getCapacity(capacityId)),
          map((capacity: CapacityDTO): string => capacity.label),
          // 'Healing', 'Flying'
          toArray(),
          // ['Healing', 'Flying']
          map((capacitiesLabels: string[]) => ({ ...unicorn, capacitiesLabels }))
        );
      }),
      toArray()
    );
  }

  public getUnicorns(): Observable<UnicornDTO[]> {
    return this.http.get<UnicornDTO[]>('http://localhost:3000/unicorns');
  }

  // Retourne les licornes de plus de 10 ans
  // En leur ajoutant 10Kg
  public getUnicorns2(): Observable<UnicornDTO[]> {
    return this.getUnicorns().pipe(
      map(unicorns =>
        unicorns
          .filter(unicorn => new Date().getFullYear() - unicorn.birthyear > 10)
          .map(unicorn => ({ ...unicorn, weight: unicorn.weight + 10 }))
      )
    );
  }

  // Retourne les licornes de plus de 10 ans
  // En leur ajoutant 10Kg
  public getUnicorns3(): Observable<UnicornDTO[]> {
    return this.getUnicorns().pipe(
      concatAll(),
      filter(unicorn => new Date().getFullYear() - unicorn.birthyear > 10),
      map(unicorn => ({ ...unicorn, weight: unicorn.weight + 10 })),
      toArray()
    );
  }

  public getUnicorn(id: number): Observable<UnicornDTO> {
    return this.http.get<UnicornDTO>(`http://localhost:3000/unicorns/${id}`);
  }

  public addUnicorn(unicorn: UnicornDTO): Observable<void> {
    return this.http.post<void>('http://localhost:3000/unicorns', unicorn);
  }

  public deleteUnicorn(unicorn: UnicornDTO): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/unicorns/${unicorn.id}`);
  }

  public updateUnicorn(unicorn: UnicornDTO): Observable<void> {
    return this.http.put<void>(`http://localhost:3000/unicorns/${unicorn.id}`, unicorn);
  }
}
