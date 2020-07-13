import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/User';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor(private users: UsersService,private router1:Router) { }
  pass: string;
  // ngOnInit(): void {
  // }
  user: User = new User();
  validatingForm: FormGroup;
  Is_ok:boolean=false;
  t:boolean=false;
  join:boolean=false;

  timeLeft: number = 3;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
    this.join=this.Is_ok;  
      }
    },1000)
  }
  goHome(){
      this.router1.navigate(['/home']);
  }
  post_user() {
    this.users.PostUser(this.user).subscribe((data:boolean)=>{this.Is_ok=data});
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormDarkEmail: new FormControl('', Validators.email),
      modalFormDarkPassword: new FormControl('', Validators.required)
    });

  }

  check_pass()
  {
    if(this.user.password!=this.pass)
    {

    }
  }

  get modalFormDarkEmail() {
    return this.validatingForm.get('modalFormDarkEmail');
  }

  get modalFormDarkPassword() {
    return this.validatingForm.get('modalFormDarkPassword');
  }

  

  

}
