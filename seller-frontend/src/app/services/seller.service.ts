import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from '../models/seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  // URL base
  private baseUrl = 'http://localhost:8080/sellers';

  constructor(private http: HttpClient) { }

  /* GET all */
  findAll(): Observable<Seller[]> {
    return this.http.get<Seller[]>(this.baseUrl);
  }
}