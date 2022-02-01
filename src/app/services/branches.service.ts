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
    this.http.get("https://data.gov.il/api/3/action/datastore_search?resource_id=894ea7de-08d0-45ce-98f2-379977499618");
    console.log("here")
    return this.http.get(environment.api+'Branch/GetAllBranches/');
  }

  GetIdBranchByName(name:string)
  {
  
    return this.http.get(environment.api+'Branch/GetIdBranchByName/'+name);
  }

  GetBranchNameById(id:number)
  {  
    console.log(" id= ", id)
  return this.http.get(environment.api+'Branch/GetBranchNameById/'+id);
  

  }

  Getcities()
  {
    return this.http.get("https://data.gov.il/api/3/action/datastore_search?resource_id=894ea7de-08d0-45ce-98f2-379977499618");
  }
}
