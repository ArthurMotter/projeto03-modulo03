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

    // GET all 
    findAll(): Observable<Seller[]> {
        return this.http.get<Seller[]>(this.baseUrl);
    }

    // GET by Id
    findById(id: number): Observable<Seller> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Seller>(url);
    }

    // POST
    create(seller: Omit<Seller, 'id'>): Observable<Seller> {
        return this.http.post<Seller>(this.baseUrl, seller);
    }

    // PUT
    update(id: number, seller: Omit<Seller, 'id'>): Observable<Seller> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<Seller>(url, seller);
    }

    // DELETE
    delete(id: number): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}