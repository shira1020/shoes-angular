import { Component, OnInit } from '@angular/core';
import { workerJob } from 'src/app/models/workerJob';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit {

  constructor(private order_from_stock: OrderFromStockService) { }

  ngOnInit(): void {
    
    this.workers_job = this.order_from_stock.worker_jobs

    this.workers_job.sort(function (a, b) {
      return b.amount - a.amount ;
    });
    
  }

workers_job : workerJob[];
}
