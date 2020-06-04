import { Component } from '@angular/core';
import { TranslateService } from '@rxweb/ngx-translate-extension';

@Component({
  selector: 'app-clean-code',
  templateUrl: './clean-code.component.html',
})
export class CleanCodeComponent {

  rightSidebarLinks: any = [{ "id": "clean-code", "title": "Clean Code", "subLink": null }, { "id": "clean-code", "title": "Clean Code", "subLink": null }];

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  title = 'clean-code';

}
