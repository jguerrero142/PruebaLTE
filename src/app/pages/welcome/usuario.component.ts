import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { User } from '../class/user.model';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

   
  public users: User[] = [];

  constructor( private userService: PagesService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUser.subscribe( (d ) => {
      if( d.length > 0){
        this.users = d;
      }
      
    })
  }

}
