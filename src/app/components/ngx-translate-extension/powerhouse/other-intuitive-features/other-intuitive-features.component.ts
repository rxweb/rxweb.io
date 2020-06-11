import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';
import { TranslateService } from '@rxweb/ngx-translate-extension';
import { Router, ActivatedRoute } from '@angular/router';
import { translate } from '@rxweb/translate';

@Component({
  templateUrl: './other-intuitive-features.component.html',
})
export class PowerhouseOtherIntruitiveFeaturesComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "other-intuitive-features", "title": "Other Intuitive Features", "subLink": null }, { "id": "other-intuitive-features", "title": "Other Intuitive Features", "subLink": null }];
  outputHtml: string;
  
  examples: any = {
    title: {
      json: `{
  "pageTitle": "Translation Lazy Loading"
}`
    },
    preload: {
      typescript: {
        route: `@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }`
      },
      ts: {
        module: `NgModule({
  imports: [
    RxTranslateModule.forRoot({
      preloadingStrategy: true      
    })
  ],
  exports: [RxTranslateModule]
})
export class RxWebModule {}
`
      }
    }
  }

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-intruitive-inner md-inner"></div></div>'
    });
  }

}