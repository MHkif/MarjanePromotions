import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagePromotion, Promotion, PromotionRequest } from '../../models/promotion.model';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private base_url = 'http://localhost:8080/marjane/api/v1/';

  constructor(private http:HttpClient) { }

  public getPromotions(page: number, size: number): Observable<PagePromotion>{
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    return this.http.get<PagePromotion>(this.base_url + "managers/promotions/pages", { params });
  }

  public getPagePromotions(page: number, size: number): Observable<PagePromotion> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PagePromotion>(this.base_url + 'managers/promotions/pages', { params });
  }

  public applyPromotions(promotion: Promotion , token: string): Observable<Array<Promotion>>{
    const headers = new HttpHeaders({
      //'Authorization': 'Bearer ' + token ,
      'token': token
      // Add other headers if needed
    });
    let promotions: Promotion[] = []; 
    promotions.push(promotion);
   return this.http.post<Array<Promotion>>(this.base_url + "promotions/apply",promotions, { headers: headers })
  }

  public savePromotion(promotionData: PromotionRequest): Observable<Promotion> {
    return this.http.post<any>(`${this.base_url}/promotions/products/create`, promotionData);
  }

  
}
