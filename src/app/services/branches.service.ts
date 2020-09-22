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
  Getcities()
  {
    return this.http.get("https://data.gov.il/api/3/action/datastore_search?resource_id=894ea7de-08d0-45ce-98f2-379977499618");
  }
}
