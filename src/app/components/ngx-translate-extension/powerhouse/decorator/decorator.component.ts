import { OnInit, Component } from '@angular/core';
declare const $;
import $ from 'jquery';
import { translate, RxTranslation, asyncTranslate } from '@rxweb/translate';
import { TranslateService } from '@rxweb/ngx-translate-extension';
import { CountryService } from './service/country.service';

@Component({
  templateUrl: './decorator.component.html',
})
export class PowerhouseDecoratorComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "decorator", "title": "Decorator", "subLink": null }, { "id": "decorator", "title": "Decorator", "subLink": null }];
  outputHtml: string;
  
  @translate() global: { [key: string]: any };

  @translate({ translationName: 'global', language: 'fr' }) globalFrench: { [key: string]: any };

  @translate({ translationName: 'dashboard' }) dashboard: { [key: string]: any };

  @translate({ translationName: 'customfile', filePath: "assets/i18n/dashboard/en.json" }) dashboardEnglish: { [key: string]: any };

  @asyncTranslate({
    serviceModel: CountryService,
    serviceMethod: CountryService.prototype.get
  })
  countries: any;


  constructor(public translate: TranslateService, public rxTranslation: RxTranslation) { 
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  name: string = "John";
  meridiem: string = "am";
  keys: string[] = ["keyOne", "nested.keyOne"];
  message: string;



  changeMeridiem() {
    this.meridiem = this.meridiem == "am" ? "pm" : "am";
  }

  selectUser(user) {
    this.message = this.rxTranslation.translate(
      this.global.selectedRecord, user
    );
  }

  examples: any = {
    basic: {
      json: `{"greet": "Hello! How are you"}`, 
      typescript: `@translate() global: any;`,
      html: `<span>{{global.greet}}</span>`
    },
    translateParams: {
      json: `{"notification": "Hello {{name}}"}`,
      typescript: `
      @translate() global: any;
      name: string = "John";
      `,
      html: `<span>{{global.notification}}</span>`
    },
    conditional: {
      json: `{"conditionalText": "this.meridiem == 'am' ? 'Good Morning' : 'Have a Good Day'",}`,
      typescript: `
      @translate() global: any;
      
      meridiem: string = "am";

      changeMeridiem() {
        this.meridiem = this.meridiem == "am" ? "pm" : "am";
      }`,
      html: `
      <span>{{global.conditionalText}}</span>
      <a (click)="changeMeridiem()">
        {{meridiem == "am" ? 'Greet Good Day' : 'Greet Good Morning' }}
      </a>
      `
    },
    reuse: {
      json: `{
  "notification": "Hello {{name}}",
  "conditionalText": "this.meridiem == 'am' ? 'Good Morning' : 'Have a Good Day'",
  "reuseText": "{{global.notification}}, {{global.conditionalText}}"
}`,
      typescript: `@translate() global: any;`,
      html: `<span>{{global.reuseText}}</span>`
    },
    async: {
      typescript: `@asyncTranslate({
  serviceModel: CountryService,
  serviceMethod: CountryService.prototype.get
})
countries: any;`,
      ts: {
        service: `
export class CountryService {

  constructor(private http: HttpClient, private rxTranslation: RxTranslation) {}
  get() { 
    return this.http.get("assets/i18n/lookup/countries." + this.rxTranslation.language + ".json")
  }
}
        `
      },
      html: `<select name="control" class="form-control">
  <option *ngFor="let item of countries | async" [value]="item.countryId">{{item.countryName}}</option>
</select>`
    },
    onDemand: {
      json: `{
  "selectedRecord": "You have selected record of '{name}'"
}`,
      typescript: `
      @translate() global: any;
      message: string;

      constructor(public rxTranslation: RxTranslation) { }
      
      selectUser(user) {
        this.message = this.rxTranslation.translate(
            this.global.selectedRecord, user
        );
      }
      `,
      html: `<div role="alert">
  {{message}}
</div>`
    }, 
    keyName: {
      json: `{
  "keyOne": "Key One",
  "nested": {
    "keyOne": "Nested Key One"
  }
}`,
      typescript: `
      @translate() global: any;

      keys: string[] = ["keyOne", "nested.keyOne"];
      `,
      html: `<tr *ngFor="let key of keys;">
  <td><span class="badge">{{key}}</span></td>
  <td>
    <span class="badge">{{global.get(key)}}</span>
  </td>
</tr>`
    },
    componentBased: {
      json: `{
  "dashboardHeading": "The text loaded from this path 'dashboard/en'"
}`,
      typescript: `@translate({ translationName: 'dashboard' }) dashboard: { [key: string]: any };`,
      html: `<span>{{dashboard.dashboardHeading}}</span>`
    },
    customFilePath: {
      json: `{
  "dashboardHeading": "The text loaded from this path 'dashboard/en'"
}`,
      typescript: `@translate({ translationName: 'customfile', filePath: "assets/i18n/dashboard/en.json" })
dashboardEnglish: { [key: string]: any };`,
      html: `<span>{{dashboardEnglish.dashboardHeading}}</span>`
    },
    translateLang: {
      json: `{"greet": "salut! Comment ça va:"}`,
      typescript: `
      @translate({ translationName: 'global', language: 'fr' }) globalFrench: { [key: string]: any };`,
      html: `<span>{{globalFrench.greet}}</span>`
    }
  }


  json: any;
  html: any;
  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-decorator-inner md-inner"></div></div>'
    });
  }

}