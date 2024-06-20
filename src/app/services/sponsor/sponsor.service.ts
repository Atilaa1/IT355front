import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsor } from 'src/app/models/sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

 
  private baseUrl = 'http://localhost:8080/api/sponsors';

  constructor(private _http : HttpClient) { }

  public getSponsors(): Observable<Sponsor[]>{
    return this._http.get<Sponsor[]>(this.baseUrl);
  }

  public getSponsorById(id?: number): Observable<Sponsor>{
    return this._http.get<Sponsor>(this.baseUrl + '/' + id);
  }

  public addSponsor(sponsor: Sponsor): Observable<Sponsor>{
    return this._http.post<Sponsor>(this.baseUrl, sponsor);
  }

  public updateSponsor(sponsor: Sponsor): Observable<Sponsor>{
    return this._http.put<Sponsor>(this.baseUrl, sponsor);
  }

  public deleteSuperheroById(id?: number): Observable<Sponsor>{
    return this._http.delete<Sponsor>(this.baseUrl + '/' + id);
  }

}
