import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/OrderDetails';
import { OrderFromBranchService } from 'src/app/services/order-from-branch.service';

@Component({
  selector: 'app-orders-from-branches',
  templateUrl: './orders-from-branches.component.html',
  styleUrls: ['./orders-from-branches.component.scss']
})
export class OrdersFromBranchesComponent implements OnInit {

  constructor(private order_from_branch:OrderFromBranchService) { }

  ngOnInit(): void {
  }
  mail:string;
  phone:string;
  name:string;
  IsOrder:boolean=false;
  t:boolean=false;

  AddOrderToBranch()
  {
    this.order_from_branch.AddOrderToBranch(this.mail,this.phone,this.name).subscribe((data:boolean)=>{this.IsOrder=data});
  }

}
