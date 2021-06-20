import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { BranchesService } from './branches.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//keep branch id here\
id_branch:number;
branch_name:string;
  constructor(private emp: EmployeeService, private branch: BranchesService) { }

  login(id_employee: string, password: string){
    //keep the branch id
    console.log("in login", id_employee, password)
    this.id_branch = this.emp.my_branch;
    this.branch.GetBranchNameById(this.id_branch).subscribe((data:string) => {this.branch_name=data});
    console.log( this.branch.GetBranchNameById(this.id_branch))
    console.log("branch name= ", this.branch_name)
    console.log("id branch = ", this.id_branch, " emp branch = ", this.emp.my_branch)
    const currentUser = {"id_employee":id_employee, "password": password};
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    console.log(localStorage.getItem("currentUser"))
  }

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
