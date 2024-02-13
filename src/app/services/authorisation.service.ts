import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  private baseUrl:string = "https://localhost:7093/api/User/"
  constructor(private http : HttpClient) { }

  signUp(userObj:any)
  {
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }
  signIn(loginObj:any) 
  {
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }
  getToken()
  {
    return localStorage.getItem('token');
  }

  isLoggedIn() : boolean{
    alert("Loggedin");
    alert(localStorage.getItem('token'));
    return !!localStorage.getItem('token')
  }
}
