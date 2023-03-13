import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-theme-language',
  templateUrl: './toggle-theme-language.component.html',
  styleUrls: ['./toggle-theme-language.component.scss']
})
export class ToggleThemeLanguageComponent {
  //La varialble darkTheme está declarada en HomeComponent
  public darkTheme: boolean = false;

  constructor() { }

  //Función para cambiar el tema oscuro-light de la página
  darkThemeToggle() {
    let homeCard = document.getElementsByClassName("home-card");
    let buttonGrid = document.getElementsByClassName("btn-grid");
    let modalBox = document.getElementsByClassName("portfolio-modal-box");
    // let menuButton = document.getElementsByClassName("menu-button");
    let logo = document.getElementsByClassName("logo");
    let signInUp = document.getElementsByClassName("bottom-btn");

    //Switcher del estado
    this.darkTheme = !this.darkTheme;

    //Condicionales para modificar el estado de distintos elementos de la página
    if (this.darkTheme === true) {
      // this.homeComponent.logoTheme = true;
      document.body.classList.add("dark-mode");
      //Bucle para iterar el HTML-Collection que devuelve el MÉTODO `getElementByClassName`. Para poder utilizar la PROPIEDAD `classList` y usar el MÉTODO `add`
      for(var i = 0; i < homeCard.length; i++) {
        homeCard[i].classList.add("dark-mode");
      }
      for(var i = 0; i < buttonGrid.length; i++) {
        buttonGrid[i].classList.add("dark-mode");
      }
      for(var i = 0; i < modalBox.length; i++) {
        modalBox[i].classList.add("dark-mode");
      }
      for(var i = 0; i < logo.length; i++) {
        logo[i].classList.add("dark-logo");
      }
      for(var i = 0; i < signInUp.length; i++) {
        signInUp[i].classList.add("dark-mode");
      }
    } else {
      document.body.classList.remove("dark-mode");
      for(var i = 0; i < homeCard.length; i++) {
        homeCard[i].classList.remove("dark-mode");
      }
      for(var i = 0; i < buttonGrid.length; i++) {
        buttonGrid[i].classList.remove("dark-mode");
      }
      for(var i = 0; i < modalBox.length; i++) {
        modalBox[i].classList.remove("dark-mode");
      }
      for(var i = 0; i < logo.length; i++) {
        logo[i].classList.remove("dark-logo");
      }
      for(var i = 0; i < signInUp.length; i++) {
        signInUp[i].classList.remove("dark-mode");
      }
    }
  }

}
