import { Component } from '@angular/core';

import { ToggleThemeLanguageComponent } from 'src/app/features/toggle-theme-language/toggle-theme-language.component';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
// import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //Variables para mostrar-ocultar formulario y cambiar el tema de la página
  public showContactMeForm = false;
  public logoTheme: boolean = false;

  constructor(
    public translateService: TranslateService,
    public appComponent: AppComponent
    // public toggleFeature: ToggleThemeLanguageComponent
  ){}

  ngOnInit(): void {
    this.detectBrowserLanguage();
  }

  //Funciones para in18
  setEnglish(){
    this.appComponent.setAppLanguageEnglish();
  }
  setSpanish(){
    this.appComponent.setAppLanguageSpanish();
  }
  detectBrowserLanguage(){
    const browserLang = this.translateService.getBrowserLang();
    if (browserLang === 'es') {}
  }

  //Función para mostrar y ocultar el formulario de contacto de la cabecera de la home.
  showContactMe() {
    this.showContactMeForm = !this.showContactMeForm;
  }

  //Función para cambiar color del logo
  logoThemeSwitcher() {
    this.logoTheme = !this.logoTheme;
  }


}

