import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe( isAuthenticated => {
      if(isAuthenticated){
        this.router.navigate(['/home'])
      }
    })
  }

  login(){
    this.auth.loginWithRedirect();
  }
}
