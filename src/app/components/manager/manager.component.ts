import { Component, OnInit, ContentChild, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { BranchsComponent } from '../branchs/branchs.component';
import { BranchesService } from 'src/app/services/branches.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor(private employee: EmployeeService, private router1: Router, private branchService: BranchesService, private auth: AuthService) { }


  password: string = "";
  id_emp: number;
  id_emp_string = "";
  validatingForm: FormGroup;
  Is_employee: boolean = true;
  // url: string = "";
  x: number;
  braches: string[] = [];
  worker_branch: string = "";
  //id_branch:number;
  worker: boolean = false;
  @ViewChild('frame', { static: true })
  modal: ModalDirective;

  ngOnInit() {

    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
    of(true)
      .pipe(delay(1000))
      .subscribe(() => {
        this.modal.show();
      });
  }

  sum: number;
  temp: number;

  IdCorrect = (): boolean => {

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
        this.sum += (Math.floor(this.temp / 10) + this.temp % 10);
      }
    }

    this.sum += +this.id_emp_string[8]
    if (this.sum % 10 == 0) {
      return true
    }
    return false;

  }

  changeInput(input: any, icon: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    icon.icon = icon.icon === "eye" ? "eye-slash" : "eye";
  }

  GetAllBranches() {
    this.branchService.GetAllBranches().subscribe((data: string[]) => { this.braches = data });
    this.worker = true;
  }
  GetIdBranchByName() {
    this.branchService.GetIdBranchByName(this.worker_branch).subscribe((data: number) => { 
      this.employee.my_branch = data 
      this.auth.id_branch = data;
    });
  }

  GetNameBranchById(id:number) {
    this.branchService.GetBranchNameById(id).subscribe((data2:string) => {
      this.worker_branch=data2;
    console.log("login as manager ", id, data2);
  
    this.auth.login(this.id_emp_string, this.password, this.worker_branch);
        this.router1.navigate(['/home']);
  });
  }

  get modalFormAvatarPassword() {
    return this.validatingForm.get('modalFormAvatarPassword');
  }
  IsEmployee() {
    this.id_emp_string = this.id_emp.toString()
    if (this.IdCorrect()) {
      console.log("id valid")

      this.employee.IsEmployee(this.id_emp_string, this.password).subscribe((data: number) => {
        this.x = data;
        if (data == 0) {
          if (this.worker_branch == "") {
            this.GetAllBranches();
          }
          else {
            console.log("worker ",this.worker_branch , this.id_emp_string)

            //shira this.GetIdBranchByName();
            console.log("worker ",this.worker_branch , this.id_emp_string, this.employee.my_branch)
            this.auth.login(this.id_emp_string, this.password, this.worker_branch);
            this.router1.navigate(['/worker/' + this.id_emp]);
          }
          // this.employee.MyBranch(this.password).subscribe((data: number) => { this.employee.my_branch = data });
        }
        else if (data == -1)
          this.Is_employee = false;
        else {//manager
          this.employee.my_branch = data;
          this.GetNameBranchById(data);
          console.log(this.auth.branch_name, "namE")
         
          

          //   this.employee.MyBranch(this.password).subscribe((data: number) => { this.employee.my_branch = data });
        }
      });
    }
    else {
      console.log("id is invalid")
    }
  }
}
