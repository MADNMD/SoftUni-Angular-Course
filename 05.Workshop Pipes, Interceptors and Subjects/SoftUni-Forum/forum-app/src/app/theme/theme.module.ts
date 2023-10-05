import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';



@NgModule({
  declarations: [
    CurrentThemeComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
