import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getUser(username: string, password: string){
    this.loginService.getUser(username, password)
    .subscribe(
      resp => {
        console.log(resp);
      }
    )
  }

}
