import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeService } from './employee.service';
import { workerJob } from '../models/workerJob';

@Injectable({
  providedIn: 'root'
})
export class OrderFromStockService {

  current_id_shoe:number;
  current_size:number
  current_color:string;
  name:string;
  worker_jobs: workerJob[] = []

  constructor(private http:HttpClient, private employee:EmployeeService) { }

  AddOrderToStock()
  {
    // const o={id_shoe:,id_branch:,size:,color:,name:this.name};
   return this.http.post(environment.api+'OrderFromStock/AddOrderToStock/'
    +this.current_id_shoe+'/'+this.employee.my_branch+'/'+this.current_size+'/'+this.current_color+'/'+this.name,0);
  }


  GetOrderFromStock()
  {
    return this.http.get(environment.api+"OrderFromStock/GetOrderFromStock/"+this.employee.my_branch);
  }

  GetNumInQueue()
  {
    return this.http.get(environment.api+"OrderFromStock/GetNumInQueue/"+this.employee.my_branch);
  }


  IncreaseWorkerJob(worker_name:string)
  {
    console.log("start IncreaseWorkerJob");
    var job: workerJob = this.worker_jobs.find(x => x.name == worker_name);
    if (!job)
    {
      console.log("worker not found", worker_name);
     var job2 : workerJob = new workerJob();
     job2.name = worker_name;
     job2.amount = 1;
      this.worker_jobs.push(job2)
      return;
    }
    console.log("worker job found", job.name, job.amount);
    job.amount+=1;

  }
}

