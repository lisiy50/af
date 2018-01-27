import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    let words = value.split(' ');
    words.forEach(function (el: string, i: number) {
      el = el.toLowerCase();
      if (i === 0 || !(el === 'the' || el === 'of' || el === 'for')) {
        el = el.charAt(0).toUpperCase() + el.slice(1);
      }
      words[i] = el;
    });

    return words.join(' ');
  }

}
