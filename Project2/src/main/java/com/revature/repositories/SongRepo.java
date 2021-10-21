package com.revature.repositories;

import com.revature.beans.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepo extends JpaRepository<Song, Integer> {
}
