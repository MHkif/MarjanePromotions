import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  isAcceptedRoute: boolean = false;
  isRejectedRoute: boolean = false;
  isPromotionsRoute: boolean = false;

  constructor(private route: ActivatedRoute) {
  
  }
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const currentRoute = segments.map(segment => segment.path).join('/');
      if (currentRoute == 'managers/promotions/accepted') {
        this.isAcceptedRoute = true;
        this.isRejectedRoute = false;
      } else if (currentRoute == 'managers/promotions/rejected') {
        this.isRejectedRoute = true;
        this.isAcceptedRoute = false;
      } else {
        this.isAcceptedRoute = false;
        this.isRejectedRoute = false;
        this.isPromotionsRoute = true;
      }
    });
    }
}
