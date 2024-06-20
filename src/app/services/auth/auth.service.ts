import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth'; // Adjust the URL according to your backend

  constructor(private _userS:UserService,private router:Router, private _storageService:StorageService) { }
  login(username: string, password: string){
    this._userS.login(username, password).subscribe({
      next: data => {
        this._storageService.saveUser(data);
        this.router.navigate(['/doctors']);
      },
      error: err => {
        alert("Uneti podaci nisu validni");
      }
    });
  }
  register(username: string, password: string, mail: string){
    const user = new User(username, password, mail);
    this._userS.register(user).subscribe((res) => {
      alert('Uspesno ste se registrovali');
      this.router.navigate(['/login']);
    })
  }


public logout(){
  this._userS.logout().subscribe({
    next: res => {
      console.log(res);
      this._storageService.clean();
      this.router.navigate(['/login']);
    },
    error: err => {
      console.log(err);
    }
  });
}
  
  }
