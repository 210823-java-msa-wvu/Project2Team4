package com.revature.controllers;

import com.revature.beans.User;
import com.revature.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/users")
public class UserController {

    // not code or implementation for this
    // all methods come from the JpaRepository<T, ID>
    private UserRepo userRepo;

    @Autowired
    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @GetMapping(path="/{id}")
    public User getById(@PathVariable("id") int id) {return userRepo.getById(id);}

<<<<<<< Updated upstream
=======
  /*@CrossOrigin(origins = "http://localhost:4200")
  @GetMapping(path="/{username}")
  public User getByUsername(@PathVariable("username") String username) {return userRepo.getByUsername(username);}
*/
    @CrossOrigin(origins = "http://localhost:4200")
>>>>>>> Stashed changes
    @PostMapping(consumes = "application/json", produces = "application/json")
    public User addUser(@RequestBody User user) {
        return userRepo.save(user);
    }

    @PutMapping(path="/{id}")
    public void updateUser(@PathVariable("id") int id, @RequestBody User user) {
        if ( id == user.getUserId()) {
            userRepo.save(user);
        }
    }

   @DeleteMapping(path="/{id}")
   public void deleteUser(@PathVariable("id") int id) {
            userRepo.delete(userRepo.getById(id));
        }
}
