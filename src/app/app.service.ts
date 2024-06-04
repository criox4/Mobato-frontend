import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Mobile {
  brand: string;
  price: number;
  color: string;
  storage: number;
  description: string;
  model: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://localhost:1111/Mobato';

  constructor(private http: HttpClient) { }

  addMobile(mobile: Mobile): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-mobile`, mobile);
  }

  viewMobile(): Observable<Mobile[]> {
    return this.http.get<Mobile[]>(`${this.baseUrl}/get-all-mobile`);
  }
}
