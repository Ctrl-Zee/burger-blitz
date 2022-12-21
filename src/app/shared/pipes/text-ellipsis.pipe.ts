import { NgModule, Pipe, PipeTransform } from '@angular/core';

/**
 * Cuts off text after the specified length
 * Takes an length argument that defaults to 65.
 * Usage:
 *   value | textEllipsis:length
 * Example:
 *   {{ "my long string" | textEllipsis:10 }}
 *   formats to: "my long st...""
 */
@Pipe({
  name: 'textEllipsis',
})
export class TextEllipsisPipe implements PipeTransform {
  transform(value: string, length = 65): string {
    if (value.length <= length) {
      return value;
    } else {
      return `${value.substring(0, 74)}...`;
    }
  }
}

@NgModule({
  declarations: [TextEllipsisPipe],
  exports: [TextEllipsisPipe],
})
export class TextEllipsisPipeModule {}
