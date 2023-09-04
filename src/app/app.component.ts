import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recruitment-solution';
 isLoggedIn = false;
 username?: string;

constructor(private authService: AuthService,
  private storageService:StorageService){}
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if(this.isLoggedIn){
      const user = this.storageService.getUser();
      this.username = user.username;
    }
  }
}
