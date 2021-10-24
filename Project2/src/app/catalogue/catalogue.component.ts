import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  /*for 2 way binding */
<<<<<<< Updated upstream
  name: string = " ";
=======
  musician_name: string = " ";
  song_name: string = " ";
>>>>>>> Stashed changes

  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(){
    this.songService.getSongs() // returns observable of Song[]
    .subscribe(
      resp => {
        this.songs = resp;
      }
    )

  }

}
