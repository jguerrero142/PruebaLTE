import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

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
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TaksComponent } from './taks/taks.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzSkeletonModule,
    NzSpinModule,
    NzTypographyModule,
    NzTagModule,
    NzInputModule,
    NzButtonModule
  ],
  declarations: [UsuarioComponent, CallbackComponent, HomeComponent, TaksComponent],
  exports: [UsuarioComponent, CallbackComponent,HomeComponent, TaksComponent]
})
export class PagesModule { }
