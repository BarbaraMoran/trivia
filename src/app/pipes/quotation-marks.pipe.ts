import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationMarks',
})
export class QuotationMarksPipe implements PipeTransform {
  transform(value: string): string {
    const SINGLE_QUOTE_KEY: string = '&#039;';
    const SINGLE_QUOTE: string = "'";
    const DOUBLE_QUOTE_KEY: string = '&quot;';
    const DOUBLE_QUOTE: string = '"';

    const newString = value
      .replaceAll(SINGLE_QUOTE_KEY, SINGLE_QUOTE)
      .replaceAll(DOUBLE_QUOTE_KEY, DOUBLE_QUOTE);
    return newString;
  }
}
