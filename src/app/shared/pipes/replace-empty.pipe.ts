import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceEmpty'
})

export class ReplaceEmptyPipe implements PipeTransform {

  /**
 *  This pipe transforms an empty String into '---'
 *
 * @param {String} value
 * @returns {String} transformed value
 */
transform(value: String): String {
    return !value || value === '' ? '---' : value;
  }

}
