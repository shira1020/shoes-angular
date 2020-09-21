import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';


@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.scss']
})
export class FoundComponent implements OnInit {

  constructor(private activatedRoute :ActivatedRoute,private orderfromstock:OrderFromStockService) { }
name:string;
stock_id:number=0;
queue:number;
  ngOnInit(): void {
    // this.name=this.activatedRoute.snapshot.paramMap.get('name');
  }
  AddOrderToStock()
  {
    this.orderfromstock.name=this.name;
    this.orderfromstock.AddOrderToStock().subscribe((data:number)=>{this.stock_id=data});
    this.orderfromstock.GetNumInQueue().subscribe((data:number)=>{this.queue=data});
  }

}
