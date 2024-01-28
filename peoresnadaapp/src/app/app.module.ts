import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { FechaFormateadaPipe } from './fecha-formateada.pipe';



@NgModule({
  declarations: [
    DateFormatPipe,
    FechaFormateadaPipe
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
