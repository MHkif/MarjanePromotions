import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { PagePromotion } from '../models/promotion.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProxyAdminService } from '../services/proxyAdmin/proxy-admin.service';


@Component({
  selector: 'app-proxy-admin',
  templateUrl: './proxy-admin.component.html',
  styleUrls: ['./proxy-admin.component.css']
})
export class ProxyAdminComponent {
  admin_promotions! : Observable<PagePromotion>;
  errorMsg! : string;
  currentPage!: number; 
  size! : number;
  searchFormGroup! : FormGroup;
  constructor(private proxyAdminService : ProxyAdminService, private fb: FormBuilder, private route: ActivatedRoute ){}
  ngOnInit(): void {
    //get query params else set default value
  this.route.queryParams.subscribe(params => {
    this.currentPage = params['page'] || 1;
    this.size = params['size'] || 5;
    this.getAllPromotions(this.currentPage - 1, this.size);
  });
}

  getAllPromotions(page: number, size: number){
    this.admin_promotions = this.proxyAdminService.geAdminPromotions(page, size).pipe(
      catchError(err => {
        console.error('There was an error!', err);
        this.errorMsg = err.message;
        return throwError(() => err);
      })
    );
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
