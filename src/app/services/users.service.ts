import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string ="https://localhost:7093/api/User/"
  constructor(private http: HttpClient) {}

  getUsers()
  {
    return this.http.get<any>(this.baseUrl);
  }
}
