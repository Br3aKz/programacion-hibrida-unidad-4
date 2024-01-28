import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaFormateada'
})
export class FechaFormateadaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
