import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  private ROOT_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {

  }

  getAllMoneyList(): Observable<any>{
    return this.http.get(this.ROOT_URL+'money/all');
  }

  sendNewMoneyRecord(data): Observable<any>{
    const headers = new HttpHeaders({
      "Content-Type": `application/json`
    })
    return this.http.post(this.ROOT_URL+'money/save', data, { responseType: 'json', headers: headers });
  }

  findByPayType(key): Observable<any>{
    return this.http.get(this.ROOT_URL+`money/find-by-pay?payType=${key}`);
  }

}
