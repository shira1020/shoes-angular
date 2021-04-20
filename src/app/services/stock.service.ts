import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OrderFromStockService } from './order-from-stock.service';
import { templateJitUrl } from '@angular/compiler';
import { Shoe } from '../models/Shoe';
import { Color } from '../models/Color';
import { addShoe } from '../models/addShoe';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient, private orderservice: OrderFromStockService) { }
  image: any;
  GetBranchesByShoe() {
    return this.http.get(environment.api + 'Stock/GetBranchesByShoe/' +
      this.orderservice.current_id_shoe + '/' + this.orderservice.current_size + '/' + this.orderservice.current_color);
  }
 
  OnUpload(shoe:Shoe,colors:number[]) { 
    const s:addShoe=new addShoe();
    s.colors=colors;
    s.shoe=shoe;
    return this.http.post(environment.api + 'Shoes/OnUpload/' ,s);
  }
  //פונקציית גט עם שליחת אובייקט או מערך:
  //return this.http.get<any>(`${environment.URL + '/Student/AddNote'}/${id}`, { params:{value,date}});‏

}
