import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseUrl: string = "http://localhost:8080/songs";

  constructor(private http: HttpClient) { }
// Put CRUD in service
  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseUrl);
  }
  
}
