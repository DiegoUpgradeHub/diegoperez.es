import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleThemeLanguageRoutingModule } from './toggle-theme-language-routing.module';
import { ToggleThemeLanguageComponent } from './toggle-theme-language.component';


@NgModule({
  declarations: [
    ToggleThemeLanguageComponent
  ],
  exports: [
    ToggleThemeLanguageComponent
  ],
  imports: [
    CommonModule,
    ToggleThemeLanguageRoutingModule
  ]
})
export class ToggleThemeLanguageModule { }
