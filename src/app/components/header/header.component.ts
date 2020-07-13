import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  


  constructor(private router1:Router,private employee:EmployeeService) { }
  password:string;
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormAvatarPassword: new FormControl('', Validators.required)
    });
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
