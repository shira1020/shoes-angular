import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Color } from '../models/Color';

@Injectable({
  providedIn: 'root'
})
export class SearchByCategoryServiceService {


  color: string;
  type: string;
  size: number;
  show:boolean=false;
  constructor(private http: HttpClient) { }
  GetSizes() {
    return this.http.get(environment.api + 'Shoes/GetSizes/');
  }
  GetColors() {
    return this.http.get(environment.api + 'Shoes/GetColors/');
  }
  GetTypes() {
    return this.http.get(environment.api + 'Shoes/GetTypes/')
  }
  GetShoesByCategory(mysize: number, mycolor: number, kind: number, mytype: string, price: number) {
    console.log("send ",mysize, mycolor, kind, mytype  )
    return this.http.get(environment.api + 'Shoes/GetShoesByCategory/' + mysize+'/' + mycolor + '/' + kind + '/' + mytype + '/' + price);
  }
}
