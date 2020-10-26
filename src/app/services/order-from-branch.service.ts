import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDetails } from '../models/OrderDetails';
import { EmployeeService } from './employee.service';
import { OrderFromStockService } from './order-from-stock.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderFromBranchService {

  constructor(private http:HttpClient,private employee:EmployeeService,private order_from_stock:OrderFromStockService) { }

  order:OrderDetails=new OrderDetails();
  AddOrderToBranch( mail:string,phone:string,name:string)
  {
  this.order.id_shoe=this.order_from_stock.current_id_shoe;
  this.order.size=this.order_from_stock.current_size;
  this.order.color=this.order_from_stock.current_color;
  this.order.to_branch=this.employee.my_branch;
  this.order.name_customer=name;
  this.order.email=mail;
  this.order.phone=phone;
  return this.http.post(environment.api+'OrderFromBranch/AddOrderToBranch',this.order);
  }


  GetOrderfromBranch(){
    return this.http.get(environment.api+'OrderFromBranch/GetOrderfromBranch/'+this.employee.my_branch);
  }
}
