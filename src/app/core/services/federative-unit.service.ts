import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FederativeUnit } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class FederativeUnitService {
  private apiUrl: string = environment.apiUrl
  private cache$?: Observable<FederativeUnit[]>;

  constructor(private http: HttpClient) {}

  list() : Observable<FederativeUnit[]> {
    if (!this.cache$) {
      this.cache$ = this.requestStates().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private requestStates() : Observable<FederativeUnit[]> {
    return this.http.get<FederativeUnit[]>(`${this.apiUrl}/estados`);
  }
}
