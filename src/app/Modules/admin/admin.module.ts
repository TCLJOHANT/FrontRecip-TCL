import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PruebaComponent } from './components/prueba/prueba.component';


@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    PruebaComponent
  ]
})
export class AdminModule { }
