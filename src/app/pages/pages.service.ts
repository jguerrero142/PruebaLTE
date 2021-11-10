import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Interfaces
import { environment } from 'src/environments/environment';
import { User } from './class/user.model';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class PagesService {
  
  
  public users: User[] = [];
  private userObservable: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users);

  get getUser(){
    return this.userObservable.asObservable();
  } 
  set setUser(users: User[]) {
    this.userObservable.next(users);
  }

  private API_URI = environment.wsUrl;

  constructor(
    private http: HttpClient
  ) { 
      this.getUsers();
  }

  // CRUD user.
  //Obetenemos todos los usuarios.
  getUsers() {
    return this.http.get<User[]>(`${this.API_URI}/usuario`)
    .subscribe( (d) => this.setUser = d)
  }

}
