import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
isLoggedIn = false;
constructor(private storageService:StorageService,
 private authService: AuthService,
 private alertService: AlertService){}

ngOnInit(): void {
  this.isLoggedIn = this.storageService.isLoggedIn();
  console.log(this.isLoggedIn);
}

logout(): void{
this.authService.logout().subscribe({
  next: res => {
    console.log(res);
    this.storageService.clean();
    this.alertService.success('Logged out successfully!',true);
    setTimeout(() => {window.location.reload();}, 2000) 
  },
  error: err => console.log(err)
})
}
}
