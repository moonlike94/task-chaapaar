import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://thingproxy.freeboard.io/fetch/https://accounts.mail.ir/app/sign-up';
  

  constructor(private http: HttpClient) {}

  getFormSchema(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
