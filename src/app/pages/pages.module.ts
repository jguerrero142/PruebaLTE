import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './welcome/usuario.component';
import { CallbackComponent } from './callback/callback.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzSkeletonModule,
    NzSpinModule,
    NzTypographyModule
  ],
  declarations: [UsuarioComponent, CallbackComponent, HomeComponent],
  exports: [UsuarioComponent, CallbackComponent]
})
export class PagesModule { }
