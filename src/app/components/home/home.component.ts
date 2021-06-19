import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private auth: AuthService) { }
  id:string="";
  ngOnInit(): void {
    // if(this.auth.isLogin())
      
  }
check()
{
  
}
  // validatingForm: FormGroup;

  // ngOnInit() {
    
  //   this.validatingForm = new FormGroup({
  //     signupFormModalName: new FormControl('', Validators.required),
  //     signupFormModalEmail: new FormControl('', Validators.email),
  //     signupFormModalPassword: new FormControl('', Validators.required),
  //   });
  // }

  // get signupFormModalName() {
  //   return this.validatingForm.get('signupFormModalName');
  // }

  // get signupFormModalEmail() {
  //   return this.validatingForm.get('signupFormModalEmail');
  // }

  // get signupFormModalPassword() {
  //   return this.validatingForm.get('signupFormModalPassword');
  // }

}
