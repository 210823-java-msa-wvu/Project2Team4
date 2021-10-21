import { Component, OnInit } from '@angular/core';
import { SONGS } from '../models/mock-songs';
import { Song } from '../models/song';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  /*for 2 way binding */
  name: string = " ";

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {

    this.songs = this.songService.getSongs();
    
  }

}
