import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
import $ from 'jquery';
import { TranslateService } from '@rxweb/ngx-translate-extension';
import { Router, ActivatedRoute } from '@angular/router';
import { translate, RxTranslation } from '@rxweb/translate';

@Component({
  templateUrl: './change-language.component.html',
})
export class PowerhouseChangeLanguageComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "change-language", "title": "Change Language", "subLink": null }, { "id": "change-language", "title": "Change Language", "subLink": null }];
  outputHtml: string;
  activeLanguage: string;

  @translate({ translationName: 'lazy-load' }) global: any;

 
  examples: any = {
    program: {
      typescript: `changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
  }`,
      html: `<p class="small ">
  <a class="blue-link" [class.active-language]="activeLanguage  == 'en'" (click)="navigate('en')">English</a>
  <a class="blue-link" [class.active-language]="activeLanguage  == 'fr'" (click)="navigate('fr')">French</a>
</p>`
    },
    url: {
      typescript: `navigate(languageCode: string) {
    this.router.navigate(["ngx-translate-extension", languageCode, "change-language"])
  }`,
      html: `<p class="small ">
  <a class="blue-link" [class.active-language]="global.languageCode == 'en'" (click)="changeLanguage('en')">English</a>
  <a class="blue-link" [class.active-language]="global.languageCode == 'fr'" (click)="changeLanguage('fr')">French</a>
</p>`
    }
  }

  changeLanguage(languageCode) {
    this.rxTranslation.change(languageCode);
}

  navigate(languageCode: string) {
    this.router.navigate(["ngx-translate-extension", languageCode, "change-language"])
  }

  constructor(public translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute, private rxTranslation: RxTranslation,) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
    
    activatedRoute.params.subscribe(t => {
      this.activeLanguage = t["languageCode"];
    })
  }

  ngOnInit() {
    document.title = "Change Language -  RxWeb Docs"
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-change-inner md-inner"></div></div>'
    });
  }

}