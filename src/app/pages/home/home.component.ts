import { Component } from '@angular/core';

import { ToggleThemeLanguageComponent } from 'src/app/features/toggle-theme-language/toggle-theme-language.component';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';

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
    // public toggleFeature: ToggleThemeLanguageComponent
  ){}

  ngOnInit(): void {
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

