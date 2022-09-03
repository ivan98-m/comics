import { Component, OnInit } from '@angular/core';
// Import the AuthService type from the SDK
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  buscar(busqueda:string){
    console.log(busqueda);
  }
  logout(){
    this.auth.logout();
  }
}
