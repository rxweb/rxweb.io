import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
})
export class CurrencyComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  pay: number = 0.259

  examples: any = {
    currencyStaticValue: {
      json: `{  
  "currencyStaticValue": "Pay {{0.259 | currency}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.currencyStaticValue}}</span>`
    },
    currencyDynamicValue: {
      json: `{  
  "currencyDynamicValue": "Pay {{pay | currency}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
pay: number = 0.259`,
      html: `<input type="text" [(ngModel)]="pay" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.currencyDynamicValue}}</span>
`
    },
    staticParam: {
      json: `{  
  "currencyStaticParam": "Pay {{pay | currency:'CAD'}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.currencyStaticParam}}</span>
`
    },
    dynamicParam: {
      json: `{  
  "currencyDynamicParam": "Pay {{pay | currency:currencyCode}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

pay: number = 0.259`,
      html: `<input type="text" [(ngModel)]="pay" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.currencyDynamicParam}}</span>`
    }
  }

  get currencyCode() {
    return this.sanitize.languageCode == 'en' ? 'CAD' : 'EUR'
  }
  
  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}