import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://628210c19fac04c6540e788c.mockapi.io/digitaldetails";

  constructor( private http:HttpClient) { }

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
