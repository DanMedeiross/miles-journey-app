import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Statement } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class StatementService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  list() : Observable<Statement[]> {
    return this.http.get<Statement[]>(`${this.apiUrl}/depoimentos`);
  }
}
