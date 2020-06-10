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
      html: `<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.currencyStaticValue}}</span></td>
  <td><span>{{sanitize.currencyStaticValue}}</span></td>
</tr>
`
    },
    currencyDynamicValue: {
      json: `{  
  "currencyDynamicValue": "Pay {{pay | currency}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
pay: number = 0.259`,
      html: `<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.currencyDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="pay" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.currencyDynamicValue}}</span>
  </td>
</tr>
`
    },
    staticParam: {
      json: `{  
  "currencyStaticParam": "Pay {{pay | currency:'CAD'}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<tr>
  <td><span>Static Param</span></td>
  <td><span>{{sanitize.raw.currencyStaticParam}}</span></td>
  <td><span>{{sanitize.currencyStaticParam}}</span></td>
</tr>
`
    },
    dynamicParam: {
      json: `{  
  "currencyDynamicParam": "Pay {{pay | currency:currencyCode}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

pay: number = 0.259`,
      html: `<tr>
  <td><span>Dynamic Param</span></td>
  <td><span>{{sanitize.raw.currencyDynamicParam}}</span></td>
  <td>
    <input type="text" [(ngModel)]="pay" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.currencyDynamicParam}}</span>
  </td>
</tr>
`
    }
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}