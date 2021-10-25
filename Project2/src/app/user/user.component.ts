import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string = " ";
  password: string = " ";

  users: User[] = [];
  user: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers() // returns observable of Song[]
    .subscribe(
      resp => {
        this.users = resp;
      }
    )
  }

  userLogin()
    {
     const usr = this.username.trim();
     const pass= this.password;
     console.log("user is "+ usr + " Password is"+ pass);

     this.userService.getByUsername(usr) // returns observable of User
    .subscribe(
      resp => {
        let userprofile = JSON.stringify(resp);
        this.user = resp;
        console.log(resp);
        console.log(JSON.stringify(this.user));
        console.log(resp.user_type_id)
      }
    )
    }

}
