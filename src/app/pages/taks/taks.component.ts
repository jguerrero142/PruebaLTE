import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as action from 'src/app/core/store/contador.actions';
import { PagesService } from '../pages.service';
import { Taks } from '../class/taks.model';

@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrls: ['./taks.component.css']
})
export class TaksComponent implements OnInit {

  public count$: Observable<number> = new Observable();
  public tak$: Taks[] = [];

  constructor( private store: Store<{ count: number }>,
                private taksService: PagesService) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'));
    this.getTaks();
  }

  getTaks(){
    this.taksService.getTaks.subscribe( d=>{
      this.tak$ = d;
    })
  } 

  increment(date: string) {
    const t = {
      taks: date
    }
    this.taksService.setTaks = t;
    this.store.dispatch(action.inc());
  }
  decrement(i: any) {
    this.taksService.delTaks = i;
    this.store.dispatch(action.dec());
  }

}
