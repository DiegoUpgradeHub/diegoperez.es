import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAreaRoutingModule } from './user-area-routing.module';
import { UserAreaComponent } from './user-area.component';

import { ToggleThemeLanguageModule } from 'src/app/features/toggle-theme-language/toggle-theme-language.module';


@NgModule({
    declarations: [
        UserAreaComponent,
    ],
    imports: [
        CommonModule,
        UserAreaRoutingModule,
        ToggleThemeLanguageModule
    ]
})
export class UserAreaModule { }
