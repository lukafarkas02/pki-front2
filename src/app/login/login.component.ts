import { Component } from '@angular/core';
import {LoginDTO} from "../DTOs/loginDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDTO: LoginDTO = new LoginDTO();

  constructor(
    //private http: HttpClient
  ) {
  }

  logIn(){
    //TODO: Metoda koja ce pozvati login iz servisa
  }

  logOut(){
    //TODO
  }
}
