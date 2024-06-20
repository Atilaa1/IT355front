import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';
  constructor(private _http: HttpClient) { }

  public getUser(): Observable<User[]>{
    return this._http.get<User[]>(this.baseUrl);
  }

  public getUserById(id?: number): Observable<User>{
    return this._http.get<User>(this.baseUrl + '/' + id);
  }

  public addUser(user: User): Observable<User>{
    return this._http.post<User>(this.baseUrl, user);
  }

  public updateUser(user: User): Observable<User>{
    return this._http.put<User>(this.baseUrl, user);
  }

  public deleteSuperheroById(id?: number): Observable<User>{
    return this._http.delete<User>(this.baseUrl + '/' + id);
  }

}
