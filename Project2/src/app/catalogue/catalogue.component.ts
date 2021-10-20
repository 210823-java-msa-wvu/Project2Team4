import { Component, OnInit } from '@angular/core';
import { SONGS } from '../models/mock-songs';
import { Song } from '../models/song';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  songs: Song[] = [];

  constructor() { }

  ngOnInit(): void {

    this.songs = SONGS;
    
  }

}
