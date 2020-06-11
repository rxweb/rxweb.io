import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
})
export class CustomComponent implements OnInit {
  @translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };

  custom: string = 'Superb'

  examples: any = {
    customStaticValue: {
      json: `{  
  "customStaticValue": "{{'Superb' | custom}}"
}`,
      ts: `@sanitize({ name: 'custom' })
@Pipe({ name: 'custom' })
export class CustomPipe implements PipeTransform {
  transform(value: number, emoji: string = ""): string {
    return '\${ value } Custom Pipe \${ emoji }';
  }
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.customStaticValue}}</span>`
    },
    customDynamicValue: {
      json: `{  
  "customDynamicValue": "{{custom | custom}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
custom: string = 'Superb'`,
      html: `<input type="text" [(ngModel)]="custom" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.customDynamicValue}}</span>
`
    },
    staticParam: {
      json: `{  
  "customStaticParam": "{{custom | custom:'😍'}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.customStaticParam}}</span>
`
    },
    dynamicParam: {
      json: `{  
  "customDynamicParam": "{{custom | custom:emoji}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
custom: string = 'Superb'`,
      html: `<input type="text" [(ngModel)]="custom" [ngModelOptions]="{standalone: true}">
<span>{{sanitize.customDynamicParam}}</span>`
    }
  }


  get emoji() {
    return '😵';
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-sanitizer-inner md-inner"></div></div>'
    });
  }
}