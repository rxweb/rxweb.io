import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';
import { TranslateService } from '@rxweb/ngx-translate-extension';
// import 'bootstrap';

@Component({
  templateUrl: './attribute-directive.component.html',
})
export class PowerhouseAttributeDirectiveComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }, { "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }];
  outputHtml: string;
  examples: any = {
    first: {
      json: `{"greet": "Hello! How are you"}`,
      html: `<span translate="greet"></span>`
    },
    translateParams: {
      json: `"notification": "Hello {{name}}"`,
      html: `<span translate="notification" [translateParams]="{'name':name}"></span>`
    },
    translateLang: {
      json: `{"note":"Ceci est le paquet ngx-translate-extension"}`,
      html: `<label translate="note" translateLang="fr"></label>`
    },
    translationName: {
      json: `{"dashboardHeading": "The Text loaded from this path 'dashboard/en'"}`,
      html: `<label translate="dashboardHeading" translationName="dashboard"></label>`
    }
  }

  json: any;
  html: any;
  name: string = 'John';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-directive-inner md-inner"></div></div>'
    });
  }

}
