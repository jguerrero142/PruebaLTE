import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Interfaces
import { environment } from 'src/environments/environment';
import { User } from './class/user.model';
import { BehaviorSubject } from 'rxjs';
import { Taks } from './class/taks.model';




@Injectable({
  providedIn: 'root',
})
export class PagesService {
  
  
  public users: User[] = [];
  public taks: Taks[] = [];
  private userObservable: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users);
  private taksObservable: BehaviorSubject<Taks[]> = new BehaviorSubject<Taks[]>(this.taks);

  get getUser(){
    return this.userObservable.asObservable();
  } 
  set setUser(users: User[]) {
    this.userObservable.next(users);
  }

  get getTaks(){
    return this.taksObservable.asObservable();
  } 
  set setTaks(taks: Taks) {
    this.taks.push(taks);    
    this.taksObservable.next(this.taks);
  }

  set delTaks(i: number){
    this.taks.splice(i,1);
    this.taksObservable.next(this.taks);
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
