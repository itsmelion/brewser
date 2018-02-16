import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'organic',
})
export class OrganicPipe implements PipeTransform {

  // This pipe is thanks to Moshe Quantz: https://stackoverflow.com/a/44764070/7331924
  transform(value, keys: string, term: string): any {
    if (!term) { return value; }

    return (value || []).filter(
      item => keys.split(',')
      .some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi')
      .test(item[key])));
  }

}
