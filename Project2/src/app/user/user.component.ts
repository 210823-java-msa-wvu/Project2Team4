import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) { }

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
     const pass= this.password.trim();
     console.log("user is "+ usr + " Password is "+ pass);

     this.userService.getByUsername(usr) // returns observable of User
    .subscribe(
      resp => {
        // let userprofile = JSON.stringify(resp);
        // this.user = resp;
        // console.log(resp);
        // console.log(JSON.stringify(this.user));
        // console.log(resp.user_type_id)
        // console.log(resp.username)
        // console.log(resp.password)
        // console.log(this.username)
        // console.log(this.password)
        // console.log(usr)
        // console.log(pass)
        if (resp != null){
          if (resp.username == usr && resp.password == pass){
            if (resp.user_type_id == 1){
              this.router.navigate(['/userhomepage']);
            } else if (resp.user_type_id == 2) {
              this.router.navigate(['/musicianhomepage']);
            }
            console.log("success login")
          } else {
            console.log("login failed")
          }
        } else {
          console.log("login failed resp null")
        }
        
      }
    )
    }

}
