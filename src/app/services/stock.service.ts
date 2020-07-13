import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OrderFromStockService } from './order-from-stock.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient,private orderservice:OrderFromStockService) { }

  GetBranchesByShoe()
  {
    return this.http.get(environment.api+'Stock/GetBranchesByShoe/'+
    this.orderservice.current_id_shoe+'/'+this.orderservice.current_size+'/'+this.orderservice.current_color);
  }
}
