import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/user'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseUrl: string = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  getUser(username: string, password: string): Observable<User> {

      
      return this.http.get<User>(this.baseUrl + "/" + username);
  }

}

