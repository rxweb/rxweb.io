import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-title-case',
  templateUrl: './title-case.component.html',
})
export class TitleCaseComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  titleCase: string = 'my name is john'

  examples: any = {
    titleCaseStaticValue: {
      json: `{  
  "titleCaseStaticValue": "{{'my name is john' | titlecase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.titleCaseStaticValue}}</span>`
    },
    titleCaseDynamicValue: {
      json: `{  
  "titleCaseDynamicValue": "{{titleCase | titlecase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
titleCase: string = 'my name is john';`,
      html: `<input type="text" [(ngModel)]="titleCase" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.titleCaseDynamicValue}}</span>
`
    }
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}