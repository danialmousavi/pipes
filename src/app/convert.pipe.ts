import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(mile: number, targetUnits: string): unknown {
    if (!mile) {
      return;
    }
    switch (targetUnits) {
      case 'KM':
        return mile * 1.6;
      case 'm':
        return mile * 1.6 * 1000;
      case 'cm':
        return mile * 1.6 * 1000 * 1000;
        default:
          throw new Error('not support unit:'+targetUnits)
    }
    return mile * 1.6;
  }
}
