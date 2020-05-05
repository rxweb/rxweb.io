import {Component, Input} from '@angular/core';
import { URL_CONTENT_TRANSLATIONS } from '../../data/urlContent-translations';
import { PROGRAMMABLE_CONTENT_TRANSLATIONS } from '../../data/programmableContent-translations';
import { FIXED_CONTENT_TRANSLATIONS } from '../../data/fixedContent-translations';
import { RxTranslation } from '@rxweb/translate';

@Component({
    templateUrl:'./content-translation.component.html',
    selector:'app-content-translation'
})
export class ContentTranslationComponent {

    rightSidebarLinks: any = [{ "id": "content-translation", "title": "Content Translation", "subLink": null }, { "id": "content-translation-by-url", "title": "Content Translation By URL", "subLink": null }, { "id": "programmable-content-translation", "title": "Programmable Content Translation", "subLink": null }, { "id": "fixed-content-translation", "title": "Fixed Content Translation", "subLink": null }];
    urlContentTranslations: any = URL_CONTENT_TRANSLATIONS
    programmableContentTranslations: any = PROGRAMMABLE_CONTENT_TRANSLATIONS
    fixedContentTranslations: any = FIXED_CONTENT_TRANSLATIONS

    constructor(private rxTranslation: RxTranslation) { }

    changeLanguage(languageCode) {
        this.rxTranslation.change(languageCode);
    }
}
