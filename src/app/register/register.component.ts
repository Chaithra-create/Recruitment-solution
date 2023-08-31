import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../models/user.model'
import { UserService } from '../services/user.service'; 
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService:UserService, 
    private router:Router,
    private alertService:AlertService){}
user:User = {
  id:1,
  name:'',
  email:'',
  password:'',
  token:''
}
pwdPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?!.*\s).{8,}$";

accepted: boolean = true;

checkState(event:any){
  console.log(event);
 this.accepted = event.target.checked;
}

  onSubmit(){
  this.userService.registerUser(this.user).
  pipe(first()).
  subscribe(data => {
    this.alertService.success('Registration successful',true);
    //this.router.navigate(['/login']);
  })
  console.log(this.user);
  }
}
