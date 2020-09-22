import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    return this.http.get(environment.api + 'Shoes/GetColors/')
  }
  GetTypes() {
    return this.http.get(environment.api + 'Shoes/GetTypes/')
  }
  GetShoesByCategory(mysize: number, mycolor: string, mytype: string) {
    return this.http.get(environment.api + 'Shoes/GetShoesByCategory/' + mysize + '/' + mycolor + '/' + mytype);
  }
}
