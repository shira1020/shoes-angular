
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinComponent } from './components/join/join.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FoundComponent } from './components/found/found.component';
import { BranchsComponent } from './components/branchs/branchs.component';
import { ShoeDetailsComponent } from './components/shoe-details/shoe-details.component';
import { OrdersFromBranchesComponent } from './components/orders-from-branches/orders-from-branches.component';
import { WorkersComponent } from './components/workers/workers.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NotFoundShoeComponent } from './components/not-found-shoe/not-found-shoe.component';
import { PayComponent } from './components/pay/pay.component';
import { NgxPayPalModule } from 'ngx-paypal';
//import { SearchByCategoryComponent } from './components/search-by-category/search-by-category.component';
import { AddShoeComponent } from './components/add-shoe/add-shoe.component';
import { SearchByCategory2Component } from './components/search-by-category2/search-by-category2.component';
import { SearchByCategoryComponent } from './components/search-by-category/search-by-category.component';
import { AuthGuard } from './auth.guard';
import { ManagmentComponent } from './components/managment/managment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JoinComponent,
    HeaderComponent,
    FoundComponent,
    BranchsComponent,
    ShoeDetailsComponent,
    OrdersFromBranchesComponent,
    WorkersComponent,
    ManagerComponent,
    NotFoundShoeComponent,
    PayComponent,
    SearchByCategoryComponent,
    AddShoeComponent,
    SearchByCategory2Component,
    ManagmentComponent,

   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPayPalModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
