import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

const baseUrl = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class UserService {
  constructor(private _http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this._http.post(
      baseUrl + 'login',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  register(user: User): Observable<any> {
    return this._http.post(
      baseUrl + 'register',
      user,
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this._http.post(baseUrl + 'signout', { }, httpOptions);
  }

 
}
