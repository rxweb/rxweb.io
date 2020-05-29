import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';
// import 'bootstrap';

@Component({
  templateUrl: './attribute-directive.component.html',
})
export class PowerhouseAttributeDirectiveComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }, { "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }];
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
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-directive-inner md-inner"></div></div>'
    });
  }

}
