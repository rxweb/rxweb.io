import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './getting-started.component.html',
})
export class NgxTranslateExtensionGettingStartedComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null }, { "id": "getting-started", "title": "Getting Started", "subLink": null }];
  outputHtml: string;

  ngOnInit() {

  }

}