import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './structural-directive.component.html',
})
export class StructuralDirectiveComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "structural-directive", "title": "Structural Directive", "subLink": null }, { "id": "structural-directive", "title": "Structural Directive", "subLink": null }];
  outputHtml: string;

  ngOnInit() {

  }

}