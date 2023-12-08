import { Component } from '@angular/core';
import { PageProduct, Product, Promotion, PromotionRequest } from '../models/promotion.model';
import { Observable, Observer, catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { PromotionService } from '../services/promotion/promotion.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.css']
})
export class CreatePromotionComponent {
  products! : Observable<PageProduct>;
  promotionForm! : FormGroup;
  errorMsg! : string;
  currentPage!: number; 
  size! : number;

  constructor(private router:Router,private fb:FormBuilder, private productService : ProductService, private promotionService: PromotionService, private route: ActivatedRoute ){}

 
ngOnInit(){
  this.route.queryParams.subscribe(params => {
    this.currentPage = params['page'] || 1;
    this.size = params['size'] || 5;
    this.getAllProducts(this.currentPage - 1, this.size);
  });
  this.promotionForm = this.fb.group({
    startAt: this.fb.control('',[Validators.required]),
    product: this.fb.control('',[Validators.required]),
    percentage: this.fb.control(0,[Validators.required]),
    endAt: this.fb.control('',[Validators.required]),
  })
}
savePromotion(){
  let product = JSON.parse(this.promotionForm.value.product);
  const promotion = new PromotionRequest({
    id: null,
    product: {
      id: product.id,
      name: product.name,
      category : product.category
    },
    startAt: this.promotionForm.value.startAt,
    percentage: this.promotionForm.value.percentage,
    endAt: this.promotionForm.value.endAt,
    createdAt: null,
    centers: [
      {
        id: 1,
        name: "Center A",
        admin: {
          cin: "LK103216"
        },
        city: {
          id: 1
        }
      }
    ]
  });

  
  this.promotionService.savePromotion(promotion).subscribe(({
    next: (response) => {
      alert('Promotion saved successfully!');
      alert(JSON.stringify(response));

      // Redirect to another route upon successful form submission
      // Replace 'your-route-path' with the route you want to navigate to
      this.router.navigate(['/proxies_admin/promotions/']);
    },
    error: (err: any) => {
      console.error('Error saving promotion:', err);
    },
  } as Partial<Observer<Promotion>>));
 
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

  // ngOnInit(){
  //   this.route.queryParams.subscribe(params => {
  //     this.currentPage = params['page'] || 1;
  //     this.size = params['size'] || 5;
  //     this.getAllProducts(this.currentPage - 1, this.size);
  //   });
  //   this.promotionForm = this.fb.group({
  //     startAt: this.fb.control('',[Validators.required]),
  //     product: this.fb.control('',[Validators.required]),
  //     precentage: this.fb.control(0,[Validators.required]),
  //     endAt: this.fb.control('',[Validators.required]),
  //   })
  // }


  // savePromotion(){
  //   let promotion: PromotionRequest = new PromotionRequest();
  //   promotion.setProduct(this.promotionForm.value.product);
  //   promotion.setPercentage(this.promotionForm.value.percentage);
  //   promotion.setStartAt(this.promotionForm.value.startAt);
  //   promotion.setEndAt(this.promotionForm.value.endAt);
  
  //   alert(JSON.stringify(promotion.getProduct().name));
  //   this.promotionService.savePromotion(promotion).subscribe(
  //  {
  //   next(response)  {
  //     alert(JSON.stringify(response));
  //     console.log('Promotion saved successfully!', response);
  //   },
  //    error(err) {
  //     console.error('Error saving promotion:', err);
  //    }
    
  
  //  });
   
  // }

}
