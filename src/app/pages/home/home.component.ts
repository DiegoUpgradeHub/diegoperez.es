import { Component } from '@angular/core';

import { AppComponent } from '../../app.component';
import { ToggleThemeLanguageComponent } from 'src/app/features/toggle-theme-language/toggle-theme-language.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //Variables para mostrar-ocultar formulario y cambiar el tema de la página
  public showContactMeForm = false;
  public darkTheme: boolean = false;

  constructor(
    public appComponent: AppComponent,
    // public toggleThemeLanguage: ToggleThemeLanguageComponent
  ){}

  ngOnInit(): void {
  }

  //Función para mostrar y ocultar el formulario de contacto de la cabecera de la home.
  showContactMe() {
    this.showContactMeForm = !this.showContactMeForm;
  }

}

