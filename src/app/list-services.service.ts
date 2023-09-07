import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListServicesService {
  private apiUrl = 'https://db.ezobooks.in/kappa/image/task';

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
