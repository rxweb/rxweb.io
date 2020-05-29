import { OnInit, Component } from '@angular/core';
declare const $;
import $ from 'jquery';
import { translate } from '@rxweb/translate';

@Component({
  selector: 'structural-directive-child',
  templateUrl: './structural-directive-child.component.html',
})
export class PowerhouseStructuralDirectiveChildComponent {

  @translate({ translationName: 'structural-directive-child' }) structuralDirectiveChild: any;

}