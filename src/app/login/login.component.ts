import { Component,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form:any ={
    username: null,
    password: null
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  fieldTextType: boolean = false;

constructor(private authService: AuthService,
  private storageService:StorageService,
  private alertService:AlertService){}

  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
this.isLoggedIn = true;
    }
  }

  toggleFieldTextType():boolean{
return this.fieldTextType = !this.fieldTextType;
  }

  onSubmit():void{
   const {username,password} = this.form;
   this.alertService.clear();
   this.authService.login(username,password).subscribe({
    next: data => {
      console.log(data);
      this.storageService.saveUser(data);
      this.isLoggedIn = true;
      this.isLoginFailed = false;
this.alertService.success(`Logged in as ${username}`,true);
setTimeout(() => {this.reloadPage();},2000 );
    },
    error: err => {
      this.isLoginFailed = true;
      this.errorMessage = err.error.message;
      this.alertService.warning(this.errorMessage,true);
    }
   })
  }

  reloadPage(): void{
    window.location.reload();
  }
}
