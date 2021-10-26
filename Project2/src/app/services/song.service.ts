import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleSong } from '../models/simplesong';
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

  addSong(song: SimpleSong): Observable<any>{
    const headers ={'content-type': 'application/json'}
    const body = JSON.stringify(song);
    console.log("song:"+song);
    console.log(body)
    return this.http.post(this.baseUrl, body, {'headers':headers})
  }

  likeSong(song_id: number, likes: number): Observable<any>{
    const body = (likes);
    console.log(body)
    return this.http.put<any>(this.baseUrl+"/"+song_id, body)
  }
  
}
