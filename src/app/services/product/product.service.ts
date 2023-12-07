import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PageProduct } from '../../models/promotion.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_url = 'http://localhost:8080/marjane/api/v1/';
  constructor(private http:HttpClient) { }

  
  public getProducts(page: number, size: number): Observable<PageProduct>{
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.http.get<PageProduct>(this.base_url + "products/pages", { params });
  }


}
