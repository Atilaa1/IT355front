import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:8080/doctors';

  constructor(private _http : HttpClient) { }

  public getDoctors(): Observable<Doctor[]>{
    return this._http.get<Doctor[]>(this.baseUrl);
  }

  public getDoctorById(id?: number): Observable<Doctor>{
    return this._http.get<Doctor>(this.baseUrl + '/' + id);
  }

  public addDoctor(doctor: Doctor): Observable<Doctor>{
    return this._http.post<Doctor>(this.baseUrl, doctor);
  }

  public updateDoctor(doctor: Doctor): Observable<Doctor>{
    return this._http.put<Doctor>(this.baseUrl, doctor);
  }

  public deleteDoctorById(id?: number): Observable<Doctor>{
    return this._http.delete<Doctor>(this.baseUrl + '/' + id);
  }

}
