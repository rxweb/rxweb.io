import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-powerhouse-sanitize',
  templateUrl: './sanitize.component.html',
})
export class PowerhouseSanitizeComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  pay: number = 0.259

  today: number = Date.now();

  numeric: number = 2.718281828459045;

  lowerCase: string = 'GOOD EXAMPLE'

  upperCase: string = 'good repository'

  titleCase: string = 'my name is munad'

  percentage: number = 0.259;

  custom: string = 'Superb'

  examples: any = {
    first: {
      json: `{  
  "currencyStaticValue": "Pay {{0.259 | currency}}",
  "currencyDynamicValue": "Pay {{pay | currency}}",
  "currencyStaticParam": "Pay {{pay | currency:'CAD'}}",
  "currencyDynamicParam": "Pay {{pay | currency:currencyCode}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
pay: number = 0.259`,
      html: `
<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.currencyStaticValue}}</span></td>
  <td><span>{{sanitize.currencyStaticValue}}</span></td>
</tr>

<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.currencyDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="pay" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.currencyDynamicValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Static Param</span></td>
  <td><span>{{sanitize.raw.currencyStaticParam}}</span></td>
  <td><span>{{sanitize.currencyStaticParam}}</span></td>
</tr>

<tr>
  <td><span>Dynamic Param</span></td>
  <td><span>{{sanitize.raw.currencyDynamicParam}}</span></td>
  <td>
    <input type="text" [(ngModel)]="pay" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.currencyDynamicParam}}</span>
  </td>
</tr>`
    },
    date: {
      json: `{  
  "dateDynamicValue": "Today is {{today | date}}",
  "dateStaticParam": "Or if you prefer, {{today | date:'fullDate'}}",
  "dateDynamicParam": "The time is {{today | date:time}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `
<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.dateDynamicValue}}</span></td>
  <td><span>{{sanitize.dateDynamicValue}}</span></td>
</tr>

<tr>
  <td><span>Dynamic Param</span></td>
  <td><span>{{sanitize.raw.dateStaticParam}}</span></td>
  <td><span>{{sanitize.dateStaticParam}}</span></td>
</tr>

<tr>
  <td><span>Dynamic Param</span></td>
  <td><span>{{sanitize.raw.dateDynamicParam}}</span></td>
  <td><span>{{sanitize.dateDynamicParam}}</span></td>
</tr>`
    },
    decimal: {
      json: `{
  "decimalStaticValue": "{{2.71828 | number}}",
  "decimalDynamicValue": "{{numeric | number}}",
  "decimalStaticParam": "{{numeric | number:'3.1-5'}}",
  "decimalDynamicParam": "{{numeric | number:formatting}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
numeric: number = 2.718281828459045;`,
      html: `<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.decimalStaticValue}}</span></td>
  <td>
    <span>{{sanitize.decimalStaticValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.decimalDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="numeric" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.decimalDynamicValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Static Param</span></td>
  <td><span>{{sanitize.raw.decimalStaticParam}}</span></td>
  <td>
    <span>{{sanitize.decimalStaticParam}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Param</span></td>
  <td><span>{{sanitize.raw.decimalDynamicParam}}</span></td>
  <td>
    <input type="text" [(ngModel)]="numeric" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.decimalDynamicParam}}</span>
  </td>
</tr>`
    },
    percent: {
      json: `{
  "percentStaticValue": "{{0.259 | percent}}",
  "percentDynamicValue": "{{percentage | percent}}",
  "percentStaticParam": "{{percentage | percent:'4.3-5'}}",
  "percentDynamicParam": "{{percentage | percent:percentFormatting}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
percentage: number = 0.259;`,
      html: `<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.percentStaticValue}}</span></td>
  <td>
    <span>{{sanitize.percentStaticValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.percentDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="percentage" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.percentDynamicValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Static Param</span></td>
  <td><span>{{sanitize.raw.percentStaticParam}}</span></td>
  <td>
    <span>{{sanitize.percentStaticParam}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Param</span></td>
  <td><span>{{sanitize.raw.percentDynamicParam}}</span></td>
  <td>
    <input type="text" [(ngModel)]="percentage" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.percentDynamicParam}}</span>
  </td>
</tr>`
    },
    lowerCase: {
      json: `{
  "lowerCaseStaticValue": "{{'GOOD EXAMPLE' | lowercase}}",
  "lowerCaseDynamicValue": "{{lowerCase | lowercase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
lowerCase: string = 'GOOD EXAMPLE';`,
      html: `<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.lowerCaseStaticValue}}</span></td>
  <td>
    <span>{{sanitize.lowerCaseStaticValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.lowerCaseDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="lowerCase" [ngModelOptions]="{standalone: true}">
    <span
     >{{sanitize.lowerCaseDynamicValue}}</span>
  </td>
</tr>`
    },
    upperCase: {
      json: `{
  "upperCaseStaticValue": "{{'good repository' | uppercase}}",
  "upperCaseDynamicValue": "{{upperCase | uppercase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
upperCase: string = 'good repository';`,
      html: `<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.upperCaseStaticValue}}</span></td>
  <td>
    <span>{{sanitize.upperCaseStaticValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.upperCaseDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="upperCase" [ngModelOptions]="{standalone: true}">
    <span
     >{{sanitize.upperCaseDynamicValue}}</span>
  </td>
</tr>`
    },
    titleCase: {
      json: `{
  "titleCaseStaticValue": "{{'my name is munad' | titlecase}}",
  "titleCaseDynamicValue": "{{titleCase | titlecase}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
titleCase: string = 'my name is munad';`,
      html: `<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.titleCaseStaticValue}}</span></td>
  <td>
    <span>{{sanitize.titleCaseStaticValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.titleCaseDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="titleCase" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.titleCaseDynamicValue}}</span>
  </td>
</tr>`
    },
    custom: {
      json: `{
  "customStaticValue": "{{'Superb' | custom}}",
  "customDynamicValue": "{{custom | custom}}",
  "customStaticParam": "{{custom | custom:'😍'}}",
  "customDynamicParam": "{{custom | custom:emoji}}"
}`,
      ts: `
@sanitize({ name: 'custom' })
@Pipe({ name: 'custom' })
export class CustomPipe implements PipeTransform {
  transform(value: number, emoji: string = ""): string {
    return '\${ value } Custom Pipe \${ emoji }';
  }
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
titleCase: string = 'my name is munad';`,
      html: `<tr>
  <td><span>Static Value</span></td>
  <td><span>{{sanitize.raw.titleCaseStaticValue}}</span></td>
  <td>
    <span>{{sanitize.titleCaseStaticValue}}</span>
  </td>
</tr>

<tr>
  <td><span>Dynamic Value</span></td>
  <td><span>{{sanitize.raw.titleCaseDynamicValue}}</span></td>
  <td>
    <input type="text" [(ngModel)]="titleCase" [ngModelOptions]="{standalone: true}">
    <span>{{sanitize.titleCaseDynamicValue}}</span>
  </td>
</tr>`
    }
  }

  get emoji() {
    return '😵';
  }

  get percentFormatting() {
    return '4.3-5';
  }

  get formatting() {
    return '4.5-5';
  }

  get currencyCode() {
    return this.sanitize.languageCode == 'en' ? 'CAD' : 'EUR'
  }

  get time() {
    return 'h:mm a z';
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}