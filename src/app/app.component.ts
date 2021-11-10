import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { PagesService } from './pages/pages.service';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as action from 'src/app/core/store/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  count$: Observable<number> = new Observable();
  public taks: number = 0;

  constructor( public auth: AuthService,
                public service: PagesService,
                private store: Store<{ count: number }>
                ){}

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'));
  }
  isCollapsed = false;

}
