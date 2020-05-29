import { OnInit, Component } from '@angular/core';
declare const $;
import $ from 'jquery';

@Component({
  templateUrl: './decorator.component.html',
})
export class DecoratorComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "decorator", "title": "Decorator", "subLink": null }, { "id": "decorator", "title": "Decorator", "subLink": null }];
  outputHtml: string;

  examples: any = {
    first: {
      json: `{"firstName":"Enter Your First Name"}`,
      html: `<span translate="firstName"></span>`
    },
    translateParams: {
      json: `{"notification":"Hey {greet}"}`,
      html: `<label translate="notification" [translateParams]="{greet:'Good Morning'}"></label>`
    },
    translateLang: {
      json: `{"note":"Ceci est le paquet ngx-translate-extension"}`,
      html: `<label translate="note" translateLang="fr"></label>`
    },
    translationName: {
      json: `{"dashboardHeading": "Dashboard/en.json"}`,
      html: `<label translate="dashboardHeading" translationName="dashboard"></label>`
    }
  }

  json: any;
  html: any;
  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-decorator-inner md-inner"></div></div>'
    });
  }

}