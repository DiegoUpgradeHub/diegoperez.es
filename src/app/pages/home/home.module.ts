import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
//Grid block, and it's imports.
import { GridHomeComponent } from './grid-home/grid-home.component';
import { CvRequestComponent } from './grid-home/cv-request/cv-request.component';
import { PortfolioDeveloperComponent } from './grid-home/portfolio-developer/portfolio-developer.component';
import { PortfolioGraphicComponent } from './grid-home/portfolio-graphic/portfolio-graphic.component';
import { ServicesModalComponent } from './grid-home/services-modal/services-modal.component';
import { UserAreaModalComponent } from './grid-home/user-area-modal/user-area-modal.component';

import { ToggleThemeLanguageComponent } from 'src/app/features/toggle-theme-language/toggle-theme-language.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactFormComponent,
    GridHomeComponent,
    CvRequestComponent,
    PortfolioDeveloperComponent,
    PortfolioGraphicComponent,
    ServicesModalComponent,
    UserAreaModalComponent,
    ToggleThemeLanguageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
