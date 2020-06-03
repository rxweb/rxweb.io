import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';
import { TranslateService } from '@rxweb/ngx-translate-extension';

@Component({
  templateUrl: './change-language.component.html',
})
export class PowerhouseChangeLanguageComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "change-language", "title": "Change Language", "subLink": null }, { "id": "change-language", "title": "Change Language", "subLink": null }];
  outputHtml: string;

  examples: any = {
    first: {
      json: `{"greet": "Hello! How are you"}`,
      html: `<label >{{ 'greet' | translate }}</label><br />`
    },
    translateParams: {
      json: `{"notification":"Hey {{name}}"}`,
      html: `<label>{{'notification' | translate:{'name':name} }}</label><br />`
    }
  }

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-change-inner md-inner"></div></div>'
    });
  }

}