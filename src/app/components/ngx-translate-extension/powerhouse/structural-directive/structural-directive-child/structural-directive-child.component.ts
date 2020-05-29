import { OnInit, Component } from '@angular/core';
declare const $;
import $ from 'jquery';

@Component({
  templateUrl: './structural-directive-child.component.html',
})
export class StructuralDirectiveChildComponent implements OnInit {

  outputHtml: string;

  json: any;
  html: any;
  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-directive-inner md-inner"></div></div>'
    });
  }

}