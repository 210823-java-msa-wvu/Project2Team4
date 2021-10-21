package com.revature.controllers;

import com.revature.beans.Song;
import com.revature.repositories.SongRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/songs")
public class SongController {

  // not code or implementation for this
  // all methods come from the JpaRepository<T, ID>
  private SongRepo songRepo;

  @Autowired
  public SongController(SongRepo songRepo) {
    this.songRepo = songRepo;
  }

  @GetMapping
  public List<Song> getAllSongs() {
    return songRepo.findAll();
  }

  @GetMapping(path="/{id}")
  public Song getById(@PathVariable("id") int id) {return songRepo.getById(id);}

  @PostMapping(consumes = "application/json", produces = "application/json")
  public Song addSong(@RequestBody Song song) {
    return songRepo.save(song);
  }

  @PutMapping(path="/{id}")
  public void updateSong(@PathVariable("id") int id, @RequestBody Song song) {
    if ( id == song.getId()) {
      songRepo.save(song);
    }
  }

  @DeleteMapping(path="/{id}")
  public void deleteSong(@PathVariable("id") int id) {
    songRepo.delete(songRepo.getById(id));
  }
}
