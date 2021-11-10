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

  public listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  
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
