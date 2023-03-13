import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ToggleThemeLanguageModule } from "./features/toggle-theme-language/toggle-theme-language.module";
import { AuthInterceptor } from './core/services/interceptors/authconfig.interceptor';

import { FooterComponent } from './core/components/footer/footer.component';
import { MenuComponent } from './core/components/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MenuComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ToggleThemeLanguageModule
    ]
})
export class AppModule { }
