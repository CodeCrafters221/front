import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';
@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {


  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string) {
     const html =  marked.parse(value).toString();
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }

}
