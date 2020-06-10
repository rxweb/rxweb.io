import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-decimal',
  templateUrl: './decimal.component.html',
})
export class DecimalComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  numeric: number = 2.718281828459045;

  examples: any = {
    decimalStaticValue: {
      json: `{  
  "decimalStaticValue": "{{2.71828 | decimal}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.decimalStaticValue}}</span>`
    },
    decimalDynamicValue: {
      json: `{  
  "decimalDynamicValue": "{{numeric | decimal}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
numeric: number = 2.718281828459045;`,
      html: `<input type="text" [(ngModel)]="numeric" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.decimalDynamicValue}}</span>
`
    },
    staticParam: {
      json: `{  
  "decimalStaticParam": "{{numeric | decimal:'3.1-5'}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.decimalStaticParam}}</span>`
    },
    dynamicParam: {
      json: `{  
  "decimalDynamicParam": "{{numeric | decimal:formatting}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
numeric: number = 2.718281828459045;`,
      html: `<input type="text" [(ngModel)]="numeric" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.decimalDynamicValue}}</span>`
    }
  }

  get formatting() {
    return '4.5-5';
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}