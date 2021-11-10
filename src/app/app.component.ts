import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { PagesService } from './pages/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public auth: AuthService,
                public service: PagesService){}
  isCollapsed = false;
}
