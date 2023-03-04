import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FooterComponent } from './core/components/footer/footer.component';
import { AuthInterceptor } from './core/services/interceptors/authconfig.interceptor';
import { UserAreaComponent } from './pages/user-area/user-area.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UserAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
