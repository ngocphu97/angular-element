import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PriceService {

  constructor(private http: HttpClient) { }

  getPricingList(): Observable<any> {
    return this.http.get('http://localhost:3000/pricing')
  }

  getPriceDetail(id): Observable<any> {
    return this.http.get(`http://localhost:3000/pricing/${id}`)
  }
}
