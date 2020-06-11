import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-upper-case',
  templateUrl: './upper-case.component.html',
})
export class UpperCaseComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  upperCase: string = 'good repository'

  examples: any = {
    upperCaseStaticValue: {
      json: `{  
  "upperCaseStaticValue": "{{'good repository' | uppercase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.upperCaseStaticValue}}</span>`
    },
    upperCaseDynamicValue: {
      json: `{  
  "upperCaseDynamicValue": "{{upperCase | uppercase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
upperCase: string = 'good repository';`,
      html: `<input type="text" [(ngModel)]="upperCase" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.upperCaseDynamicValue}}</span>
`
    }
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}