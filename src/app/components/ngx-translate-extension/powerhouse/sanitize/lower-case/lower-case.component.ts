import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-lower-case',
  templateUrl: './lower-case.component.html',
})
export class LowerCaseComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  lowerCase: string = 'GOOD EXAMPLE';

  examples: any = {
    lowerCaseStaticValue: {
      json: `{  
  "lowerCaseStaticValue": "{{'GOOD EXAMPLE' | lowercase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.lowerCaseStaticValue}}</span>`
    },
    lowerCaseDynamicValue: {
      json: `{  
  "lowerCaseDynamicValue": "{{lowerCase | lowercase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
lowerCase: string = 'GOOD EXAMPLE';`,
      html: `<input type="text" [(ngModel)]="lowerCase" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.lowerCaseDynamicValue}}</span>
`
    }
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}