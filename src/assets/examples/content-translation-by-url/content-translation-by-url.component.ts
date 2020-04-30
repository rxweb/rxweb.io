import { Component } from "@angular/core"
import { translate, RxTranslation } from '@rxweb/translate'
import { Router } from '@angular/router';

@Component({
    templateUrl: './content-translation-by-url.component.html',
    selector: "app-content-translation-by-url"
})
export class ContentTranslationByUrlComponent {

    @translate({ translationName: "signup" })
    multilingualContent: { [key: string]: any }

    baseUrl: string = 'https:\\\\example.com';
    supportedUrl: string = '';
    url: string = "https:\\\\example.com\\" + this.multilingualContent.languageCode +"\\signup";
    

    constructor(private route: Router, private rxTranslation: RxTranslation) { }

    navigate(languageCode: string) {
        this.supportedUrl = "\\" + languageCode + "\\signup"
        this.url = this.baseUrl + this.supportedUrl;
        this.rxTranslation.change(languageCode);
    }
}
