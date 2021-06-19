import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';
import { timer } from 'rxjs';


@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.scss']
})
export class FoundComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router1: Router, private orderfromstock: OrderFromStockService) { }
  name: string;
  stock_id: number = 0;
  queue: number;
  x: string;
  interval;
  ngOnInit(): void {
    // this.name=this.activatedRoute.snapshot.paramMap.get('name');
  }
  startTimer(timeLeft: number) {
    this.interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
      }
      else {
        this.router1.navigate(["/home"]);
        clearInterval(this.interval);
      }
    }, 1000)
  }

  AddOrderToStock() {
    this.orderfromstock.name = this.name;
    this.orderfromstock.AddOrderToStock().subscribe((data: number) => {
    this.stock_id = data;
      console.log("data = " + data);
      console.log("id_data = " + this.stock_id);
      if (this.stock_id != 0) {
         console.log("stock id = " + this.stock_id)

        this.orderfromstock.GetNumInQueue().subscribe((data: number) => {
        this.queue = data;
        console.log("queue= ", this.queue);
          this.startTimer(10);
          console.log("after timer 10 sec")
          // if (this.stock_id != 0) {
          //   this.startTimer(20);
          //   this.router1.navigate(["/home"]);
          // }
          // this.router1.navigate(["/home"]);
        }

        );
      }
    }
    );



  }

}
