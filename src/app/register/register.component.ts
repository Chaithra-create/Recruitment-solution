import { Component} from '@angular/core';
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
      password:null,
      confirmPassword:null
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

pwdPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?!.*\s).{8,}$";

accepted: boolean = true;
fieldTextType1: boolean = false;
fieldTextType2: boolean = false;

constructor( private alertService:AlertService,
  private authService: AuthService){}

checkState(event:any){
  console.log(event);
 this.accepted = event.target.checked;
}

toggleFieldTextType1():boolean{
return this.fieldTextType1 = !this.fieldTextType1;
}

toggleFieldTextType2():boolean{
  return this.fieldTextType2 = !this.fieldTextType2;
  }


  onSubmit():void{
    const {username,email,password,confirmPassword} = this.form;
    this.alertService.clear();
this.authService.register(username,email,password).
subscribe({
  next: data => {
    console.log(data);
    this.isSuccessful = true;
    this.isSignUpFailed = false;
    this.alertService.success('Registration successful!',true);
  },
  error:err => {
this.errorMessage = err.error.message;
this.isSignUpFailed = true;
this.alertService.warning(this.errorMessage,true);
  }
})  
 }
}
