import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnicornDTO } from '../dto/unicorn.dto';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private http: HttpClient) {}

  public getUnicorns(): Observable<UnicornDTO[]> {
    return this.http.get<UnicornDTO[]>('http://localhost:3000/unicorns');
  }

  public getUnicorn(id: number): Observable<UnicornDTO> {
    return this.http.get<UnicornDTO>(`http://localhost:3000/unicorns/${id}`);
  }

  public addUnicorn(unicorn: UnicornDTO): Observable<UnicornDTO> {
    return this.http.post<UnicornDTO>('http://localhost:3000/api/unicorns', unicorn);
  }

  public deleteUnicorn(id: number): Observable<UnicornDTO> {
    return this.http.delete<UnicornDTO>(`http://localhost:3000/api/unicorns/${id}`);
  }

  public updateUnicorn(unicorn: UnicornDTO): Observable<UnicornDTO> {
    return this.http.put<UnicornDTO>(`http://localhost:3000/api/unicorns/${unicorn.id}`, unicorn);
  }
}
