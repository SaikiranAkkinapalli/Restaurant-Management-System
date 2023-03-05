import { Component } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-homepageforms',
  templateUrl: './homepageforms.component.html',
  styleUrls: ['./homepageforms.component.scss']
})
export class HomepageformsComponent {
  hide = true;
  showlogin = true;
  showsignup = false;
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  showLogin(){
    console.log("Coming Here")
    this.showlogin = true;
    this.showsignup = false;
  }
  showSignup(){
    this.showlogin = false;
    this.showsignup = true;
  }
}
