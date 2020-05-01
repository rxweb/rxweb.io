import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: './getting-started.component.html',
})
export class TranslateGettingStartedComponent implements OnInit {

  showComponent: boolean = false;
  rightSidebarLinks: any = [{ "id": "getting-started", "title": "Getting Started", "subLink": null }, { "id": "getting-started", "title": "Getting Started", "subLink": null }];
  pageTitle: any = this.rightSidebarLinks[0];
  titleData: any = { codeContent: {} };
  mainTab: string = "installation"
  importModule: any = `RxTranslateModule.forRoot({
          cacheLanguageWiseObject: true,
          globalFilePath: "assets/i18n/{{language-code}}/global.{{language-code}}.json",
          filePath: "assets/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json"
      })`
  mapTranslate: any = `@translate() 
multilingualContent: { [key: string]: any }`

  enJsonFile: any = `{
  "pageWiseTitle": "Resolve Translation Page Wise",
  "placeholder": {
    "firstName": "Enter your first name"
  },
  "text": {
    "firstName": "First Name",
    "create": "Create Account"
  }
}`

  constructor(private applicationBroadCaster: ApplicationBroadcaster, private http: Http
  ) {
    this.applicationBroadCaster.topSubscriber.subscribe(t => {
      this.titleData = t;
    })
  }

  ngOnInit(): void {
    document.title = "Getting Started Translate - RxWeb Docs";
    this.showComponent = true;
    this.applicationBroadCaster.topSubject.next(this.pageTitle);
  }

}