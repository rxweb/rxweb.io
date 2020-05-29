import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';

@Component({
  templateUrl: './structural-directive.component.html',
})
export class StructuralDirectiveComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "structural-directive", "title": "Structural Directive", "subLink": null }, { "id": "structural-directive", "title": "Structural Directive", "subLink": null }];
  outputHtml: string;

  examples: any = {
    structuralDirective: {
      json: `{"text":"structural-directive-child/en.json"}`,
      typescript: `
export class StructuralDirectiveChildComponent {

  @translate({ translationName: 'structural-directive-child' }) structuralDirectiveChild: any;

}`,
      html: `<structural-directive-child *rxTranslate="true"></structural-directive-child>`
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