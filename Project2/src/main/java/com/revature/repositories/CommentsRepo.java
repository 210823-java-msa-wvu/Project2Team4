package com.revature.repositories;

import com.revature.beans.Comments;
import com.revature.beans.Musician;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsRepo extends JpaRepository<Comments, Integer> {
}
