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
      html: `<span>{{sanitize.dateDynamicValue}}</span>`
    },
    dateDynamicParam: {
      json: `{  
  "dateStaticParam": "Or if you prefer, {{today | date:'fullDate'}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };
today: number = Date.now();`,
      html: `<span>{{sanitize.dateStaticParam}}</span>
`
    },
    dynamicParam: {
      json: `{  
  "dateDynamicParam": "The time is {{today | date:time}}"
}`,
      typescript: `@translate({ translationName: 'sanitize' }) sanitize: { [key: string]: any };`,
      html: `<span>{{sanitize.dateDynamicParam}}</span>`
    },
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