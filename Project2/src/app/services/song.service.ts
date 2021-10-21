import { Injectable } from '@angular/core';
import { SONGS } from '../models/mock-songs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSongs(): Song[] {

    const songs = SONGS;
    return songs;
  }

  
}
