import { Component } from '@angular/core';
import { TranslateService } from '@rxweb/ngx-translate-extension';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
})
export class PlayGroundComponent {

  rightSidebarLinks: any = [{ "id": "playground", "title": "Playground", "subLink": null }, { "id": "playground", "title": "Playground", "subLink": null }];

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  title = 'ngx-translate-demo';
  
}
