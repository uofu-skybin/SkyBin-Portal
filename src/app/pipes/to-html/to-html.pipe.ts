import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'toHtml'
})
export class ToHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(value: string): any {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

}
