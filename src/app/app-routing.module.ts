import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JoinComponent } from './components/join/join.component';
import { FoundComponent } from './components/found/found.component';
import { BranchsComponent } from './components/branchs/branchs.component';
import { ShoeDetailsComponent } from './components/shoe-details/shoe-details.component';
import { OrdersFromBranchesComponent } from './components/orders-from-branches/orders-from-branches.component';
import { WorkersComponent } from './components/workers/workers.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NotFoundShoeComponent } from './components/not-found-shoe/not-found-shoe.component';
import { PayComponent } from './components/pay/pay.component';


const routes: Routes = [
  {path:'home' ,component:HomeComponent},
  {path:'shoe-details/:id',component:ShoeDetailsComponent},
  {path:'join',component:JoinComponent},
  {path:'', redirectTo: '/manager',pathMatch:'full'},
  {path:'found',component:FoundComponent},
  {path:'branchs',component:BranchsComponent},
  {path:'order-from-branch',component:OrdersFromBranchesComponent},
  {path:'worker',component:WorkersComponent},
  {path:'manager',component:ManagerComponent},
  {path:'not-found-shoe',component:NotFoundShoeComponent},
  {path:'pay',component:PayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
