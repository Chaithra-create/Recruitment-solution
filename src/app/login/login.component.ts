import { Component, ViewChild,OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
user:User = {
  userName:'',
  password:''
}
pwdPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@^!%*?&])(?!.*\s).{8,}$";

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.user );
  }
}
