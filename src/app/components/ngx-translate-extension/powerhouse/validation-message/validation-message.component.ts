import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './validation-message.component.html',
})
export class PowerhouseValidationMessageComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "validation-message", "title": "Validation Message", "subLink": null }, { "id": "validation-message", "title": "Validation Message", "subLink": null }];
  outputHtml: string;

  ngOnInit() {

  }

}