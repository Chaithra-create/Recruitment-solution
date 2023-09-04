import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    form: any = {
      username: null,
      email: null,
      password:null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

pwdPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?!.*\s).{8,}$";

accepted: boolean = true;

constructor( private alertService:AlertService,
  private authService: AuthService){}

checkState(event:any){
  console.log(event);
 this.accepted = event.target.checked;
}

  onSubmit():void{
    const {username,email,password} = this.form;
this.authService.register(username,email,password).subscribe({
  next: data => {
    console.log(data);
    this.isSuccessful = true;
    this.isSignUpFailed = false;
    this.alertService.success('Registration successful!',true);
  },
  error:err => {
this.errorMessage = err.errorMessage;
this.isSignUpFailed = true;
  }
})  
 }
}
