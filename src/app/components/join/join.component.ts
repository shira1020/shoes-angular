import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { BranchesService } from 'src/app/services/branches.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor(private users: UsersService, private router1: Router, private brunch: BranchesService) { }
  pass: string;
  // ngOnInit(): void {
  // }
  cities:any;

  user: User = new User();
  validatingForm: FormGroup;
  Is_ok: boolean = false;
  t: boolean = false;
  join: boolean = false;

  timeLeft: number = 3;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        console.log(this.timeLeft)
        this.timeLeft--;
      } else {
        console.log(this.timeLeft)
        this.join = this.Is_ok;
        console.log(this.Is_ok)

      }
    }, 1000)
  }
  goHome() {
    this.router1.navigate(['/home']);
  }
  post_user() {
    this.users.PostUser(this.user).subscribe((data: boolean) => { this.Is_ok = data });
  }
  Getcities() {
    this.brunch.Getcities().subscribe((data: any) => {
      this.cities = data.result.records.map(city => city.Name)
      console.log(this.cities);
    });
  }
  ngOnInit() {
    this.Getcities();
    this.validatingForm = new FormGroup({
      modalFormDarkEmail: new FormControl('', Validators.email),
      modalFormDarkPassword: new FormControl('', Validators.required)
    });

  }
  //var autocomplete = new google.maps.places.Autocomplete(document.getElementById('adr'));

  check_pass() {
    if (this.user.password != this.pass) {

    }
  }

  get modalFormDarkEmail() {
    return this.validatingForm.get('modalFormDarkEmail');
  }

  get modalFormDarkPassword() {
    return this.validatingForm.get('modalFormDarkPassword');
  }





}
