import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ShoesService } from 'src/app/services/shoes.service';
import { shoeDetails } from 'src/app/models/shoeDetails';
import { Router } from '@angular/router';
import { ModalDirective } from 'angular-bootstrap-md';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private auth: AuthService, private shoes: ShoesService,private router1: Router ) { }
  id:string="";
  interval;
  @ViewChild('frame', { static: true }) 
  modal: ModalDirective;

  startTimer(timeLeft: number) {
    this.interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
      }
      else {
        
        of(true)
      .pipe(delay(1000))
      .subscribe(() => {
        this.modal.hide();
      });
        clearInterval(this.interval);
      }
    }, 1000)
  }

  ngOnInit(): void {
    // if(this.auth.isLogin())

  }

  isNumeric = (val: number): boolean => {
    return !isNaN(Number(val));
  }
check()
{

  this.shoes.GetDetailsById(+this.id).subscribe((data: shoeDetails) => {
    if (data == null)
    {
      of(true)
      .pipe(delay(1000))
      .subscribe(() => {
        this.modal.show();
      });
      this.startTimer(3);
      console.log("the shoe not found")
    }
    else{

      this.shoes.current_shoe_details = data;
      
      this.router1.navigate(["/shoe-details/"+this.id]);
    }
  });
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
