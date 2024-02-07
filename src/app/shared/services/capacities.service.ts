import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CapacityDTO } from '../dto/capacity.dto';

@Injectable({
  providedIn: 'root',
})
export class CapacitiesService {
  constructor(private http: HttpClient) {}

  public getCapacity(id: number): Observable<CapacityDTO> {
    return this.http.get<CapacityDTO>(`http://localhost:3000/capacities/${id}`);
  }

  public getCapacities(): Observable<CapacityDTO[]> {
    return this.http.get<CapacityDTO[]>(`http://localhost:3000/capacities`);
  }
}
