import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../types/type';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  list() : Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${this.apiUrl}/promocoes`);
  }
}
