import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridHomeRoutingModule } from './grid-home-routing.module';
//Aquí no importo ningún componente. Los importo directamente en home module.
// import { PortfolioGraphicComponent } from './portfolio-graphic/portfolio-graphic.component';
// import { ServicesModalComponent } from './services-modal/services-modal.component';
// import { CvRequestComponent } from './cv-request/cv-request.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    GridHomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GridHomeModule { }
