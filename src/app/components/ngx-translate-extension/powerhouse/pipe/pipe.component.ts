import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';
import { TranslateService } from '@rxweb/ngx-translate-extension';

@Component({
  templateUrl: './pipe.component.html',
})
export class PowerhousePipeComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "pipe", "title": "Pipe", "subLink": null }, { "id": "pipe", "title": "Pipe", "subLink": null }];
  outputHtml: string;

  examples: any = {
    first: {
      json: `{"greet": "Hello! How are you"}`,
      html: `<label >{{ 'greet' | translate }}</label><br />`
    },
    translateParams: {
      json: `{"notification":"Hey {{name}}"}`,
      html: `<label>{{'notification' | translate:{'name':name} }}</label><br />`
    },
    translateLang: {
      json: `{"note":"Ceci est le paquet ngx-translate-extension"}`,
      html: `<label>{{'note' | translate:{lang:'fr'} }}</label><br />`
    },
    translationName: {
      json: `{"dashboardHeading": "Dashboard/en.json"}`,
      html: `<label>{{'dashboardHeading' | translate:{translationName:'dashboard'} }} </label><br />`
    }
  }

  name: string = 'John';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-pipe-inner md-inner"></div></div>'
    });
  }

}