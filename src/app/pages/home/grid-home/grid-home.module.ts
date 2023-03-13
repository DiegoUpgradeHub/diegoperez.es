import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridHomeRoutingModule } from './grid-home-routing.module';

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
