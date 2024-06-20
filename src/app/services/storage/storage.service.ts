import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  clean(): void {
    localStorage.clear();  
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  public isAdminLoggedIn(): boolean {
    const user = localStorage.getItem(USER_KEY);
    if(user){
      const userObj = JSON.parse(user);
      if(userObj.roles[0] == "ROLE_ADMIN"){
        return true;
      }
    }
    return false;
  }

}