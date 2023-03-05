import { Component } from '@angular/core';

//Importamos HomeComponent porque ahí se ubica la variable darkTheme.
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-toggle-theme-language',
  templateUrl: './toggle-theme-language.component.html',
  styleUrls: ['./toggle-theme-language.component.scss']
})
export class ToggleThemeLanguageComponent {
  //La varialble darkTheme está declarada en HomeComponent
  // public darkTheme: boolean = false;

  constructor(
    public homeComponent: HomeComponent,
  ){}

  //Función para cambiar el tema oscuro-light de la página
  darkThemeToggle() {
    let homeCard = document.getElementsByClassName("home-card");
    let buttonGrid = document.getElementsByClassName("btn-grid");
    let modalBox = document.getElementsByClassName("portfolio-modal-box");

    //Switcher del estado
    this.homeComponent.darkTheme = !this.homeComponent.darkTheme;

    //Condicionales para modificar el estado de distintos elementos de la página
    if (this.homeComponent.darkTheme === true) {
      document.body.classList.add("dark-mode");
      //Bucle para iterar el HTML-Collection que devuelve el MÉTODO `getElementByClassName`. Para poder utilizar la PROPIEDAD `classList` y usar el MÉTODO `add`.
      for(var i = 0; i < homeCard.length; i++) {
        homeCard[i].classList.add("dark-mode");
      }
      for(var i = 0; i < homeCard.length; i++) {
        buttonGrid[i].classList.add("dark-mode");
      }
      for(var i = 0; i < homeCard.length; i++) {
        modalBox[i].classList.add("dark-mode");
      }
    } else {
      document.body.classList.remove("dark-mode");
      for(var i = 0; i < homeCard.length; i++) {
        homeCard[i].classList.remove("dark-mode");
      }
      for(var i = 0; i < homeCard.length; i++) {
        buttonGrid[i].classList.remove("dark-mode");
      }
      for(var i = 0; i < homeCard.length; i++) {
        modalBox[i].classList.remove("dark-mode");
      }
    }
  }


}
