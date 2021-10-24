import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  // Put CRUD in service
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
}
