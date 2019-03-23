import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceEmpty'
})
export class ReplaceEmptyPipe implements PipeTransform {

  transform(value: String): String {
    return !value || value === '' ? '---' : value;
  }

}
