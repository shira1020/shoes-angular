import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http :HttpClient) { }
my_branch:number; 
IsEmployee(id_emp:string, pass:string)
  {
   return this.http.get(environment.api+'Employee/IsEmployee/'+id_emp+'/'+pass);
  }
  // MyBranch(pass:string)
  // {
  //   return this.http.get(environment.api+'Branch/MyBranch/'+pass);
  // }

  // IsWorker(pass:string)
  // {
  //   return this.http.get(environment.api+'Employee/IsEmployee/'+pass);
  // }
}
