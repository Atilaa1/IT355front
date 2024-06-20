import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from 'src/app/models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

 
  private baseUrl = 'http://localhost:8080/hospitals';

  constructor(private _http : HttpClient) { }

  public getHospitals(): Observable<Hospital[]>{
    return this._http.get<Hospital[]>(this.baseUrl);
  }

  public getHospitalById(id?: number): Observable<Hospital>{
    return this._http.get<Hospital>(this.baseUrl + '/' + id);
  }

  public addHospital(hospital: Hospital): Observable<Hospital>{
    return this._http.post<Hospital>(this.baseUrl, hospital);
  }

  public updateHospital(hospital: Hospital): Observable<Hospital>{
    return this._http.put<Hospital>(this.baseUrl, hospital);
  }

  public deleteHospitalById(id?: number): Observable<Hospital>{
    return this._http.delete<Hospital>(this.baseUrl + '/' + id);
  }

}
