import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './attribute-directive.component.html',
})
export class AttributeDirectiveComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }, { "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }];
  outputHtml: string;

  ngOnInit() {

  }

}