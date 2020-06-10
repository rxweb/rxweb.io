import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class DateComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  today: number = Date.now();

  examples: any = {
    dateDynamicValue: {
      json: `{  
  "dateDynamicValue": "Today is {{today | date}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

      today: number = Date.now();`,
      html: `<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.dateDynamicValue}}</span></td>
  <td><span>{{sanitize.dateDynamicValue}}</span></td>
</tr>
`
    },
    dateDynamicParam: {
      json: `{  
  "dateStaticParam": "Or if you prefer, {{today | date:'fullDate'}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
today: number = Date.now();`,
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
  "dateDynamicParam": "The time is {{today | date:time}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<tr>
  <td style="width:25%"><span class="ft-small badge badge-light">Dynamic Param</span></td>
  <td style="width:25%"><span class="badge badge-light">{{sanitize.raw.dateDynamicParam}}</span></td>
  <td style="width:50%">
    <span class="badge badge-{{sanitize.languageCode}}">{{sanitize.dateDynamicParam}}</span>
  </td>
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