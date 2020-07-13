import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  id:string="";
  ngOnInit(): void {
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
