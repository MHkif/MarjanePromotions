import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PromotionService } from './services/promotion/promotion.service';
import { PromotionsComponent } from './manager/promotions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ProxyAdminComponent } from './proxy-admin/proxy-admin.component';
import { CreatePromotionComponent } from './create-promotion/create-promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PromotionsComponent,
    DashboardComponent,
    SuperAdminComponent,
    ProxyAdminComponent,
    CreatePromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
