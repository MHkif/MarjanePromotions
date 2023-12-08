import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion/promotion.service';
import { Observable, catchError, throwError } from 'rxjs';
import { PagePromotion, Promotion } from '../models/promotion.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent {
  manager_promotions! : Observable<PagePromotion>;
  errorMsg! : string;
  currentPage!: number;
  size! : number;
  acceptedCount: number = 0;
  refusedCount: number = 0;
  pendingCount: number = 0;
  searchFormGroup! : FormGroup;

  constructor(private promotionService : PromotionService, private fb: FormBuilder, private route: ActivatedRoute ) {}
  // ngOnInit(): void {
  //   this.searchFormGroup = this.fb.group({
  //     keyword : this.fb.control(null)
  //   });
  // this.getAllPromotions(0,5);
  // }
  ngOnInit(): void {
    //get query params else set default value
    this.route.queryParams.subscribe(params => {
      this.currentPage = params['page'] || 1;
      this.size = params['size'] || 5;
      this.getAllPromotions(this.currentPage - 1, this.size);
    });
  }

  getAllPromotions(page: number, size: number) {
    this.manager_promotions = this.promotionService.getPromotions(page, size).pipe(
      catchError((err) => {
        console.error('There was an error!', err);
        this.errorMsg = err.message;
        return throwError(() => err);
      })
    );

    // Subscribe to promotions and count based on status
    this.manager_promotions.subscribe((promotions) => {
      this.acceptedCount = promotions.content.filter((p) => p.status === 'ACCEPTED').length;
      this.refusedCount = promotions.content.filter((p) => p.status === 'REFUSED').length;
      this.pendingCount = promotions.content.filter((p) => p.status === 'PENDING').length;
    });
  }



// Method to generate an array of page numbers
  getTotalPagesArray(listPromotions: PagePromotion): number[] {
    return Array.from({ length: listPromotions.totalPages }, (_, index) => index + 1);
  }

// Method to handle navigation to a specific page
  goToPage(page: number): void {
    // Perform any action needed when navigating to a new page (e.g., fetching data)
    this.currentPage = page;
    // You can call a method here to fetch data based on the selected page
    // Example: this.getAllPromotions(page, pageSize);
  }


}
