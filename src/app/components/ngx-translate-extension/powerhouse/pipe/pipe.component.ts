import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';

@Component({
  templateUrl: './pipe.component.html',
})
export class PowerhousePipeComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "pipe", "title": "Pipe", "subLink": null }, { "id": "pipe", "title": "Pipe", "subLink": null }];
  outputHtml: string;

  examples: any = {
    first: {
      json: `{"firstName":"Enter Your First Name"}`,
      html: `<label >{{'firstName' | translate}}</label><br />`
    },
    translateParams: {
      json: `{"notification":"Hey {greet}"}`,
      html: `<label>{{'notification' | translate:{greet:'Good Morning'} }}</label><br />`
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

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-pipe-inner md-inner"></div></div>'
    });
  }

}