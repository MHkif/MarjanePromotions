import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PagePromotion, Promotion } from '../../models/promotion.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProxyAdminService {
  private base_url = 'http://localhost:8080/marjane/api/v1/';
  constructor(private http:HttpClient) { }

  public geAdminPromotions(page: number, size: number): Observable<PagePromotion>{
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    return this.http.get<PagePromotion>(this.base_url + "proxies_admin/promotions/pages", { params });
  }

 
}
