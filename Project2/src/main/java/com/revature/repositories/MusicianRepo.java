package com.revature.repositories;

import com.revature.beans.Musician;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MusicianRepo extends JpaRepository<Musician, Integer> {
}
