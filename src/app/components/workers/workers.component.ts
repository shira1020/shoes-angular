import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from 'src/app/services/shoes.service';
import { OrderDetails } from 'src/app/OrderDetails';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';
import { OrderFromBranchService } from 'src/app/services/order-from-branch.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {



  id: string;
  src: string[][];
  code: number = 0;
  name: string = "";
  finish: boolean = false;
  finish_order_from_b = false;
  order: OrderDetails = new OrderDetails();
  order_from_branch: OrderDetails = new OrderDetails();
  cur: boolean = false;
  oth: boolean = false;
  start: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private shoes: ShoesService, private order_from: OrderFromStockService, private order_from_b: OrderFromBranchService) { }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.shoes.get_shoe_by_id(this.id).subscribe((data: string[][]) => { this.src= data });


  }

  GetOrderFromStock() {
    this.order_from.GetOrderFromStock().subscribe((data: OrderDetails) => {
      if (data != null)
        this.order = data
      else
        this.finish = true;
    });
  }

  GetOrderfromBranch() {
    this.order_from_b.GetOrderfromBranch().subscribe((data: OrderDetails) => {
      if (data != null)
        this.order_from_branch = data;
      else
        this.finish_order_from_b = true;
    })
  }

  showCurrent() {
    this.start = false;
    this.cur = true;
    this.GetOrderFromStock();
    // this.oth=false;
  }

  showOthers() {
    this.start = false;
    this.oth = true;
    this.GetOrderfromBranch();
    // this.cur=false;
  }

  showStart() {
    this.start = true;
    this.cur = false;
    this.oth = false;
  }
}
