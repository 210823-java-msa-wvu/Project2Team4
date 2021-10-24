import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public username: string = " ";
  public password: string = " ";

  last_name: string = " ";

  users: User[] = [];
  
  constructor(private userService: UserService) { }

  userLogin()
    {
     const usr = this.username;
     const pass = this.password;
     console.log(usr + ' ' + pass);
    }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(
      resp => {
        this.users = resp;
      }
    )
  }

}
