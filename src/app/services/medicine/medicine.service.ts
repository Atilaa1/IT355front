import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from 'src/app/models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = 'http://localhost:8080/medicines';

  constructor(private _http : HttpClient) { }

  public getMedicine(): Observable<Medicine[]>{
    return this._http.get<Medicine[]>(this.baseUrl);
  }

  public getMedicineById(id?: number): Observable<Medicine>{
    return this._http.get<Medicine>(this.baseUrl + '/' + id);
  }

  public addMedicine(medicine: Medicine): Observable<Medicine>{
    return this._http.post<Medicine>(this.baseUrl, medicine);
  }

  public updateMedicine(medicine: Medicine): Observable<Medicine>{
    return this._http.put<Medicine>(`${this.baseUrl}/${medicine.id}`, medicine);
  }

  public deleteMedicineById(id?: number): Observable<Medicine>{
    return this._http.delete<Medicine>(this.baseUrl + '/' + id);
  }

}
