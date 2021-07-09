import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth.service';
import { BranchesService } from 'src/app/services/branches.service';
import { ModalDirective } from 'angular-bootstrap-md';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  


  constructor(private router1:Router,private employee:EmployeeService, private auth: AuthService, private branch: BranchesService) { }
  password: string = "";
  id_emp: number;
  id_emp_string="";
  validatingForm: FormGroup;
  Is_employee: boolean = true;
  // url: string = "";
  x: number;
  braches:string[]=[];
  worker_branch:string="";
  //id_branch:number;
  worker:boolean=false;
  @ViewChild('frame', { static: true })
  modal: ModalDirective;
  sum:number;
temp:number;

  IdCorrect = (): boolean =>{
   
    this.sum = 0;//לסיכום החישוב

    for (var i = 0; i < 8; i++) {
      //אם האינדקס זוגי מכפיל באחד ומכניס לסיכום
      if (i % 2 == 0) {
        this.sum += +this.id_emp_string.charAt(i);
      }
      //אם האינדקס זוגי מכפיל ב-2
      //ובודק אם התוצאה דו סםרתית מחבר את האחדות והעשרות
      //התוצאה מוכנסת לסיכום
      else {
        this.temp = 2 * +this.id_emp_string.charAt(i);
        this.sum += (Math.floor(this.temp/10) +this.temp%10);
      }
    }

    this.sum += +this.id_emp_string[8]
    if(this.sum % 10 == 0)
    {
      return true
    }
    return false;
      
  }

  changeInput(input: any, icon: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    icon.icon =  icon.icon === "eye" ? "eye-slash" : "eye";
  }
  
  // password:string;
  // validatingForm: FormGroup;
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

  IsEmployee() {
    this.id_emp_string = this.id_emp.toString()
    if (this.IdCorrect()) {
      console.log("id valid")

      this.employee.IsEmployee(this.id_emp_string, this.password).subscribe((data: number) => {
        this.x = data;
        if(data!=-1)
        {
          this.auth.logout()
          this.router1.navigate(['/login']);
        }
       
      });
    }
    else {
      console.log("id is invalid")
    }
  }
  
  GetAllBranches()
  {
    this.branch.GetAllBranches().subscribe((data:string[])=>{this.braches=data});
    this.worker=true;
  }
  GetIdBranchByName()
  {
    this.branch.GetIdBranchByName(this.worker_branch).subscribe((data:number)=>{this.employee.my_branch = data});
  }


}

