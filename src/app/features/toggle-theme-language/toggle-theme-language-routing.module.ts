import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToggleThemeLanguageComponent } from './toggle-theme-language.component';

const routes: Routes = [
  {
    path: ``, component: ToggleThemeLanguageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleThemeLanguageRoutingModule { }
