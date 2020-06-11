import { Component, OnInit } from '@angular/core';

declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';
import { TranslateService } from '@rxweb/ngx-translate-extension';

@Component({
  selector: 'app-powerhouse-pure-pipe',
  templateUrl: './pure-pipe.component.html',
})
export class PowerhousePurePipeComponent implements OnInit {
  @translate() global: { [key: string]: any };

  name: string = "John"

  examples: any = {
    static: {
      json: `{
  "notification": "Hello {{name}}"
}`,
      typescript: `@translate() global: { [key: string]: any };`,
      html: `<label>{{global.raw.notification | rxTranslate:{'name':'John'} }}</label><br />`
    },
    dynamic: {
      json: `{
  "notification": "Hello {{name}}"
}`,
      typescript: `name: string = "John";
@translate() global: { [key: string]: any };
      `,
      html: `<label>{{global.raw.notification | rxTranslate:{'name':name} }}</label><br />`
    }
  }

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-pure-pipe-inner md-inner"></div></div>'
    });
  }

}