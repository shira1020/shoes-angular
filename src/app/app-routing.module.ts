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
import { AddShoeComponent } from './components/add-shoe/add-shoe.component';
import { SearchByCategoryComponent } from './components/search-by-category/search-by-category.component';
import { SearchByCategory2Component } from './components/search-by-category2/search-by-category2.component';
import { ManagmentComponent } from './components/managment/managment.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'shoe-details/:id', component: ShoeDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'join', component: JoinComponent, canActivate: [AuthGuard]  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login' ,component: ManagerComponent},
  { path: 'found', component: FoundComponent , canActivate: [AuthGuard] },
  { path: 'branchs', component: BranchsComponent, canActivate: [AuthGuard]  },
  { path: 'order-from-branch', component: OrdersFromBranchesComponent, canActivate: [AuthGuard]  },
  { path: 'worker/:id', component: WorkersComponent, canActivate: [AuthGuard]  },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard]  },
  { path: 'not-found-shoe', component: NotFoundShoeComponent, canActivate: [AuthGuard]  },
  { path: 'pay', component: PayComponent, canActivate: [AuthGuard]  },
  { path: 'add-shoe', component: AddShoeComponent, canActivate: [AuthGuard]  },
  { path: 'search-by-category', component: SearchByCategoryComponent, canActivate: [AuthGuard] },
  { path: 'search-by-category2', component: SearchByCategory2Component, canActivate: [AuthGuard] },
  { path: 'managment', component: ManagmentComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
