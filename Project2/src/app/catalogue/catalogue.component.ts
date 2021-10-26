import { Component, OnInit } from '@angular/core';
import { SimpleSong } from '../models/simplesong';
import { Song } from '../models/song';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  /*for 2 way binding */
  musician_name: string = " ";
  song_name: string = " ";

  title: string = " ";
  musician_id: number = 0;
  url: string = " ";

  song_id: number = 0;

  songs: Song[] = [];

  song!: SimpleSong;

  song2!: Song;

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

  getASong(id: any){
    console.log("Song id "+ id);
    this.songService.getASong(id) // returns observable of Song
    .subscribe(
      resp => {
        this.song = resp;
        console.log("resp "+ JSON.stringify(resp));
      }
    )
  }

  addSong()
    {
      const tit = this.title.trim();
      const mi= this.musician_id; 
      const u= this.url.trim();     
      console.log("title is "+ tit);
      console.log(" musician id is "+ mi);

      this.song = {
        title: tit,
        musician_id: mi,
        url: u
      }

      console.log("this.song is" + this.song);

      this.songService.addSong(this.song) 
      .subscribe(
        resp => {
          console.log("resp: "+resp);
          this.getSongs();
        }
      )
    }

    likeSong(id: number)
    {
      const si = this.song_id;  
      const l = 1;
      console.log("song id is "+ si);

      this.getASong(id);

      this.songService.likeSong(this.song2) 
      .subscribe(
        resp => {
          console.log("resp: "+resp);
          this.getSongs();
        }
      )
    }

}