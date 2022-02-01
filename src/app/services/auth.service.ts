import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { BranchesService } from './branches.service';
import { NONE_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//keep branch id here\
id_branch:number;
id_branch_for_header:number;
branch_name:string;
  constructor(private emp: EmployeeService, private branch: BranchesService) { }


  login(id_employee: string, password: string, worker_branch: string){
    //keep the branch id
    this.branch_name = worker_branch;
    
    console.log("start logon ", this.branch_name )
    this.branch.GetIdBranchByName(worker_branch).subscribe((data: number) => {
       console.log("get data in lambda auth service ts", data); this.emp.my_branch = data;
      this.id_branch = data;
      this.id_branch_for_header = data;
      console.log("get data in login ",  this.id_branch ,this.id_branch_for_header, data)
    
    });

    console.log("in login",this.id_branch_for_header, id_employee, password, this.emp.my_branch,  worker_branch, this.id_branch)
    // this.id_branch = this.emp.my_branch;
    //this.branch.GetBranchNameById(this.id_branch).subscribe((data:string) => {this.branch_name=data});
    //console.log( this.branch.GetBranchNameById(this.id_branch))
    //console.log("branch name= ", this.branch_name)
   // console.log("id branch = ", this.id_branch, " emp branch = ", this.emp.my_branch)
    const currentUser = {"id_employee":id_employee, "password": password};
    console.log("save in storage ",worker_branch,  this.id_branch, this.id_branch_for_header)
    const branch_info = {"name": worker_branch, "id": this.id_branch}
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    localStorage.setItem("branch_info", JSON.stringify(branch_info))
    console.log(localStorage.getItem("currentUser"))
    console.log(localStorage.getItem("branch_info"))
  }


  // login(id_employee: string, password: string, worker_branch: string =""){
  //   //keep the branch id
  //   this.branch_name = worker_branch;
    


    
  //   console.log("in login", id_employee, password, this.emp.my_branch,  worker_branch, this.id_branch)
  //   this.id_branch = this.emp.my_branch;
  //   this.branch.GetBranchNameById(this.id_branch).subscribe((data:string) => {this.branch_name=data});
  //   console.log( this.branch.GetBranchNameById(this.id_branch))
  //   console.log("branch name= ", this.branch_name)
  //   console.log("id branch = ", this.id_branch, " emp branch = ", this.emp.my_branch)
  //   const currentUser = {"id_employee":id_employee, "password": password};
  //   localStorage.setItem("currentUser", JSON.stringify(currentUser))
  //   console.log(localStorage.getItem("currentUser"))
  // }

  logout(){
    localStorage.removeItem("currentUser")
  }

  isLogin(){
    if(localStorage.getItem("currentUser")){
      return true;
    }
    return false;
  }
}
