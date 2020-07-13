import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http:HttpClient) { }

  GetAllBranches()
  {
    return this.http.get(environment.api+'Branch/GetAllBranches/');
  }

  GetIdBranchByName(name:string)
  {
    return this.http.get(environment.api+'Branch/GetIdBranchByName/'+name);
  }
}
