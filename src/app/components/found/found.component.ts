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
t:boolean=false;
queue:number;
  ngOnInit(): void {
    // this.name=this.activatedRoute.snapshot.paramMap.get('name');
  }
  AddOrderFromStock()
  {
    this.orderfromstock.name=this.name;
    this.orderfromstock.AddOrderFromStock().subscribe((data:boolean)=>{this.t=data});
    this.orderfromstock.GetNumInQueue().subscribe((data:number)=>{this.queue=data});
  }

}
