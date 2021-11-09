import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './pages/welcome/usuario.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { TaksComponent } from './pages/taks/taks.component';

const routes: Routes = [
  
  { path: 'usuario', component: UsuarioComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'taks', component: TaksComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
