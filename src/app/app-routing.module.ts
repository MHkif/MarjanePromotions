import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './manager/promotions.component';
import { ProxyAdminComponent } from './proxy-admin/proxy-admin.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';


const routes: Routes = [
  {
    path: 'managers/promotions',
    component: DashboardComponent 
  },
  {
    path: 'proxies_admin/promotions',
    component: ProxyAdminComponent // Replace 'AppComponent' with your actual component
  },
  {
    path: 'proxies_admin/promotions/create',
    component: CreatePromotionComponent // Replace 'AppComponent' with your actual component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
