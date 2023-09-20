import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewThemeComponent,
    CurrentThemeComponent,
  ]
})
export class ThemeModule { }
