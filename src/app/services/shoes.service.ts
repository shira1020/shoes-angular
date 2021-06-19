import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeService } from './employee.service';
import { Color } from 'angular-bootstrap-md';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(private http:HttpClient, private employee:EmployeeService, private auth:AuthService) { }

  // GetImageById(id:number)
  // {
  //    return this.http.get(environment.api+'Shoes/GetImageById/'+id);
  // }

  GetColorsById(id:number)
  {
    return this.http.get(environment.api+'Shoes/GetColorsById/'+id);
  }

  GetSizesById(id:number)
  {
    return this.http.get(environment.api+'Shoes/GetSizesById/'+id);
  }

  GetDetailsById(id:number)
  {
  return this.http.get(environment.api+'Shoes/GetDetailsById/'+id);
  }
  IsFoundInStock(id_shoe:number,size:number,color:string)
  {
    console.log("employee branch = ", this.employee.my_branch, " auth branch", this.auth.id_branch, this.employee.my_branch, this.auth.branch_name)
    return this.http.get(environment.api+'Stock/IsFoundInStock/'+id_shoe+'/'+this.auth.id_branch+'/'+size+'/'+color);
  }
  GetColors()
  {
    return this.http.get(environment.api+'Shoes/GetColors/');
  }
}



