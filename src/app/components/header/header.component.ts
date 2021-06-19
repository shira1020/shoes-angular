import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth.service';
import { BranchesService } from 'src/app/services/branches.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  


  constructor(private router1:Router,private employee:EmployeeService, private auth: AuthService, private branch: BranchesService) { }
  password:string;
  validatingForm: FormGroup;
  branch_name:string;


  ngOnInit() {
    this.branch_name = this.auth.branch_name
    console.log("header init", this.auth.id_branch , this.employee.my_branch)

    this.branch.GetBranchNameById(this.auth.id_branch).subscribe((data:string) => {this.branch_name=data});
   
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
  }

logout()
{
this.auth.logout()
}

  get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }
 

  // IsWorker()
  // {
  //   this.employee.IsWorker(this.password).subscribe((data:boolean)=>{
  //     if(data==true)
  //     {
  //       this.router1.navigate(['/worker']);
  //     }
  //   });
  // }
}
