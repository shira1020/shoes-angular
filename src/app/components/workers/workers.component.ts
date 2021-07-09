import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoesService } from 'src/app/services/shoes.service';
import { OrderDetails } from 'src/app/models/OrderDetails';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';
import { OrderFromBranchService } from 'src/app/services/order-from-branch.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {



  id: string;
  worker_name: string = "John"
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
  constructor(private activatedRoute: ActivatedRoute, private router1: Router, private shoes: ShoesService, private order_from: OrderFromStockService, private order_from_b: OrderFromBranchService) { }
  @ViewChild('frame', { static: true })
  modal: ModalDirective;

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    // worker_name =get_worker_name_by_id()

    // this.shoes.get_shoe_by_id(this.id).subscribe((data: string[][]) => { this.src= data });


  }
addShoe()
{
  this.router1.navigate(["/add-shoe"]);
}
  GetOrderFromStock() {
    this.order_from.GetOrderFromStock().subscribe((data: OrderDetails) => {
      if (data != null)
        this.order = data
      else
      {
        of(true)
        .pipe(delay(1000))
        .subscribe(() => {
          this.modal.show();
          
        });
        this.finish = true;
      }
        
    });
  }
start_back()
{
  this.start=true
}
  GetOrderfromBranch() {
    this.order_from_b.GetOrderfromBranch().subscribe((data: OrderDetails) => {
      console.log(data)
      if (data != null)
      {
        console.log("data of order=", data)
          this.order_from_branch = data;

      }
      else
      {
        of(true)
        .pipe(delay(1000))
        .subscribe(() => {
          this.modal.show();
        });
        this.finish_order_from_b = true;

        
      }
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
