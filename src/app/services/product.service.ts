// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7050/api/Products'; // URL API backend

  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  // getAllProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}`);
  // }
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  // getProductById(id: number): Observable<Product> {
  //   return this.http.get<Product>(`${this.apiUrl}/${id}`);
  // }

  // updateProduct(id: number, product: ProductList): Observable<Product> {
  //   return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  // }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
