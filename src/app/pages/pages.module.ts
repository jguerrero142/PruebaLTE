import { NgModule } from '@angular/core';


import { UsuarioComponent } from './welcome/usuario.component';
import { CallbackComponent } from './callback/callback.component';


@NgModule({
  imports: [],
  declarations: [UsuarioComponent, CallbackComponent],
  exports: [UsuarioComponent, CallbackComponent]
})
export class PagesModule { }
