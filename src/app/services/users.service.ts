import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

PostUser(user: User){
  return this.http.post(environment.api+'MoadonCustomer/AddMoadonCustomer',user);
}
  
}
