import { Component } from '@angular/core';
import { PageProduct, PromotionRequest } from '../models/promotion.model';
import { Observable, catchError, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { PromotionService } from '../services/promotion/promotion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})
export class CreatePromotionComponent {
  products! : Observable<PageProduct>;
  errorMsg! : string;
  currentPage!: number; 
  size! : number;

  constructor(private productService : ProductService, private promotionService: PromotionService, private route: ActivatedRoute ){}

  ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.currentPage = params['page'] || 1;
    this.size = params['size'] || 5;
    this.getAllProducts(this.currentPage - 1, this.size);
  });
}
onSubmit(form: NgForm): void {
  if (form.valid) {
    const promotionData = new PromotionRequest(form.value.product,form.value.percentage,form.value.startAt,form.value.endAt);


    // Call the service method to save the promotion
    this.promotionService.savePromotion(promotionData).subscribe(
      (response) => {
        console.log('Promotion saved successfully!', response);
        // Handle success, such as showing a success message or redirecting
      },
      (error) => {
        console.error('Error saving promotion:', error);
        // Handle error, show error message or perform other actions
      }
    );
  }
}
  getAllProducts(page: number, size: number){
    this.products = this.productService.getProducts(page, size).pipe(
      catchError(err => {
        console.error('There was an error!', err);
        this.errorMsg = err.message;
        return throwError(() => err);
      })
    );
  }

  

}
