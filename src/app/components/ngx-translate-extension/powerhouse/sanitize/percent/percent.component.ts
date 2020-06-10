import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
})
export class PercentComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  percentage: number = 0.259;

  examples: any = {
    percentStaticValue: {
      json: `{  
  "percentStaticValue": "{{0.259 | percent}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.percentStaticValue}}</span>`
    },
    percentDynamicValue: {
      json: `{  
  "percentDynamicValue": "{{percentage | percent}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
percentage: number = 0.259;`,
      html: `<input type="text" [(ngModel)]="percentage" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.percentDynamicValue}}</span>
`
    },
    staticParam: {
      json: `{  
  "percentStaticParam": "{{percentage | percent:'4.3-5'}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.percentStaticParam}}</span>`
    },
    dynamicParam: {
      json: `{  
  "percentDynamicParam": "{{percentage | percent:percentFormatting}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
percentage: number = 0.259;`,
      html: `<input type="text" [(ngModel)]="percentage" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.percentDynamicParam}}</span>`
    }
  }

  get percentFormatting() {
    return '4.3-5';
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}