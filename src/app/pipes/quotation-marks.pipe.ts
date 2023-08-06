import { Pipe, PipeTransform } from '@angular/core';
import {
  DOUBLE_QUOTE,
  DOUBLE_QUOTE_KEY,
  SINGLE_QUOTE,
  SINGLE_QUOTE_KEY,
} from '../constants/constants';

@Pipe({
  name: 'quotationMarks',
})
export class QuotationMarksPipe implements PipeTransform {
  transform(value: string): string {
    const newString = value
      .replaceAll(SINGLE_QUOTE_KEY, SINGLE_QUOTE)
      .replaceAll(DOUBLE_QUOTE_KEY, DOUBLE_QUOTE);
    return newString;
  }
}
