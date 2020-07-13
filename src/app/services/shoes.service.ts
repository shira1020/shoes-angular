import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private http:HttpClient, private employee:EmployeeService) { }

  GetImageById(id:number)
  {
     return this.http.get(environment.api+'Shoes/GetImageById/'+id);
  }

  GetColorsById(id:number)
  {
    return this.http.get(environment.api+'Shoes/GetColorsById/'+id);
  }

  GetSizesById(id:number)
  {
    return this.http.get(environment.api+'Shoes/GetSizesById/'+id);
  }

  IsFoundInStock(id_shoe:number,size:number,color:string)
  {
    return this.http.get(environment.api+'Stock/IsFoundInStock/'+id_shoe+'/'+this.employee.my_branch+'/'+size+'/'+color);
  }
}



