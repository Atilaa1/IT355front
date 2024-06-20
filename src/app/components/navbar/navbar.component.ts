import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogged!: boolean;
  isAdmin!: boolean;

  constructor(private _authService: AuthService, private _storageService: StorageService){

  }

  ngDoCheck(): void {
    this.isLogged = this._storageService.isLoggedIn();
    this.isAdmin = this._storageService.isAdminLoggedIn();
  }

  logout(){
    this._authService.logout();
  }
}