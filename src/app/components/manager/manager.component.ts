import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { BranchsComponent } from '../branchs/branchs.component';
import { BranchesService } from 'src/app/services/branches.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(private employee: EmployeeService, private router1: Router,private branchService:BranchesService, private auth: AuthService) { }

  password: string = "";
  id_emp: string = "";
  validatingForm: FormGroup;
  Is_employee: boolean = true;
  // url: string = "";
  x: number;
  braches:string[]=[];
  worker_branch:string="";
  //id_branch:number;
  worker:boolean=false;
  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
  }

  GetAllBranches()
  {
    this.branchService.GetAllBranches().subscribe((data:string[])=>{this.braches=data});
    this.worker=true;
  }
  GetIdBranchByName()
  {
    this.branchService.GetIdBranchByName(this.worker_branch).subscribe((data:number)=>{this.employee.my_branch = data});
  }

  get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }
  IsEmployee() {
    this.employee.IsEmployee(this.id_emp, this.password).subscribe((data: number) => {
      this.x = data;
      if (data == 0) {
            if(this.worker_branch=="")
            {
              this.GetAllBranches();
            }
            else{
              
              this.GetIdBranchByName();;
              this.auth.login(this.id_emp, this.password);
              this.router1.navigate(['/worker/'+this.id_emp]);
            }   
        // this.employee.MyBranch(this.password).subscribe((data: number) => { this.employee.my_branch = data });
      }
      else if (data == -1)
        this.Is_employee = false;
      else {
        this.employee.my_branch = data;
        console.log(this.auth.branch_name ,"namE")
        this.auth.login(this.id_emp, this.password)
        this.router1.navigate(['/home']);
        
        //   this.employee.MyBranch(this.password).subscribe((data: number) => { this.employee.my_branch = data });
      }
    });
  }
}
